#!/usr/bin/env bash

cat ./test/create_db.sql | mysql -h127.0.0.1 -usimplon -p1234
cat ./test/mockup_db.sql | mysql -h127.0.0.1 -usimplon -p1234 Movies_test