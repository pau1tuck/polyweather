#! /bin/bash

IP=$(curl -s ifconfig.me)
INFO=$(curl -s "ipinfo.io/$IP")

CITY=$(echo "$INFO" | jq -r '.city')
#REGION=$(echo "$INFO" | jq -r '.region')
#COUNTRY=$(echo "$INFO" | jq -r '.country')

#echo "$IP - $CITY, $REGION, $COUNTRY"
echo "$IP ($CITY)"
