#!/bin/bash

if [ "$PORT" ]
    then p=$PORT
else
    # Default to 3000
    p=3000
fi

react-server start --port $p