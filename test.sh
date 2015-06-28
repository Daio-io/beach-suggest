#!/usr/bin/env bash

killall node
node index &

mocha qa/
killall node

