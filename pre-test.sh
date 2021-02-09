#!/usr/bin/env bash

cat ./test/create_db.sql | mysql -hlocalhost -usimplon -p1234
cat ./test/mockup_db.sql | mysql -hlocalhost -usimplon -p1234 Movies_test