#!/usr/bin/env bash
# exit on error
set -o errexit

bundle install

# For Ruby on Rails apps uncomment these lines to precompile assets and migrate your database.
# bundle exec rake assets:precompile
# bundle exec rake assets:clean
# bundle exec rake db:migrate
