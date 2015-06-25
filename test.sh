#!/usr/bin/env bash

killall node
node index &

mocha
killall node

