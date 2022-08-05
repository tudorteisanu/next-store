#!/bin/sh
set -eo pipefail

#if [[ ! -f ".env" ]]
#then
#    echo "Error: .env not found."
#    cp .env.example .env
#fi


yarn dev

exit 0
