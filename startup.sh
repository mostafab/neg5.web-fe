#!/bin/bash

if ! [ "$PORT" ]
then
    PORT=3000
fi

PORT=$PORT react-server start --port $PORT --log-level info