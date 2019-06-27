#!/bin/bash

# {
#   "game": {
#     "cell": {
#       "index": 0,
#       "value": "x"
#     },
#     "over": false
#   }
# }

curl "https://tic-tac-toe-wdi.herokuapp.com/games/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "game": {
      "cells"["'"${INDEX}"'"] = '"${VALUE}"'"
    },
    "over": "'"${OVER}"'"
  }'

echo
