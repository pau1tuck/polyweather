#!/bin/bash

c=0
t=0

while read -r i; do
    t=$(echo "$t + $i" | bc)
    c=$((c + 1))
done < <(awk '/MHz/ {print $4}' /proc/cpuinfo)

# Calculate average GHz
cpu_load=$(echo "scale=2; $t / $c / 1000" | bc | awk '{print $1" GHz"}')

# Get the first line with aggregate of all CPUs from /proc/stat
# user, nice, system, idle, etc.
get_cpu_stats() {
    cat /proc/stat | grep '^cpu ' | awk '{for(i=2;i<=NF;i++) {printf "%s ", $i}}'
}

# Read the first line of /proc/stat
old_stats=$(get_cpu_stats)

sleep 1

# Read the first line again
new_stats=$(get_cpu_stats)

# Calculate the difference between the two readings
delta=()
index=0
for value in $old_stats; do
    new_value=$(echo $new_stats | cut -d' ' -f$(($index + 1)))
    delta[$index]=$(($new_value - $value))
    ((index++))
done

# Calculate the overall usage percentage
total=0
for value in "${delta[@]}"; do
    total=$(($total + $value))
done

# The 4th value in the array is the idle time
idle=${delta[3]}

used=$(($total - $idle))

# Calculate the percentage of used time
cpu_percentage=$((100 * $used / $total))

echo "$cpu_percentage% $cpu_load"
