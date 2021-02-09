#!/usr/bin/env bash

cat ./test/create_db.sql | mysql -h localhost -u simplon -p 1234
cat ./test/mockup_db.sql | mysql -h localhost -u simplon -p 1234 Movies_test