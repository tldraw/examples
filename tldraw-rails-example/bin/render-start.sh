#!/usr/bin/env bash
# exit on error
set -o errexit

# Uncomment the line depending on the framework you are deploying

# Sinatra
# bundle exec rackup

# Ruby on Rails
bundle exec puma -C config/puma.rb
