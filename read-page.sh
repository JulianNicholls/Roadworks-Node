#! /bin/bash

# cd /home/julian/sources/react/roadworks
DATE=`date +%Y-%m-%d`
ts-node read-page.js >"roadworks-$DATE.json"