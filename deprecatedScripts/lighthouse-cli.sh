#!/bin/bash

# Define the function to handle errors
handle_error() {
  echo "An error occurred. Removing folder..."
  rm -rf "$reports_folder"
  exit 1
}

input_file="$1"

# Check if the input file is provided
if [ -z "$input_file" ]; then
  echo "Input file not provided."
  exit 1
fi

# Check if the input file exists
if [ ! -f "$input_file" ]; then
  echo "Input file not found."
  exit 1
fi

# Read the URLs from the file line by line
urls=()
while IFS= read -r line; do
  urls+=("$line")
done < "$input_file"

current_date=$(date +'%d-%m-%Y-%H-%M-%S')
reports_folder="./report-$current_date"

# Set up error handling
# trap 'handle_error' ERR

mkdir "$reports_folder" # || handle_error

for url in "${urls[@]}"
do
  domain_path=$(echo "$url" | sed -e 's|https://||' -e 's|http://||' -e 's|/|_|g')
  output_path="$reports_folder/${domain_path}.json"
  if [ "$output_path" = "$reports_folder/.json" ]; then
    output_path="$reports_folder/homepage.json"
  fi
  #      --extra-headers="{\"Authorization\":\"Basic $url_key\"}"  \ #   -> eventually if you need to authenticate
  if [[ "$2" == "--html-output" ]]; then
    lighthouse "$url" \
      --output json --output html \
      --output-path "$output_path" \
      --chrome-flags="--headless" \
      --preset="desktop"
  else
    lighthouse "$url" \
      --output json \
      --output-path "$output_path" \
      --chrome-flags="--headless" \
      --only-audits="cumulative-layout-shift"
  fi
done
