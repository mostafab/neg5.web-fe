#!/bin/bash

if ! [ "$PORT" ]
then
    PORT=80
fi

PORT=$PORT react-server start --port $PORT