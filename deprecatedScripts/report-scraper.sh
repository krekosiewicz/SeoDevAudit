#!/bin/bash


display_text() {
  local textColored=$1
  local value=$2
  local nonColoredText=$3

    # Check if the value is null or empty
  if [ -z "$value" ] || [ "$value" = "null" ]; then
    echo -e "\033[35m$textColored\033[0m $nonColoredText"
    return
  fi

  # Convert the value to a floating-point number for comparison
  local float_value=$(awk "BEGIN {print $value+0}")

  if (( $(awk 'BEGIN {print ("'"$float_value"'" < 0.1)}') )); then
    echo -e "\033[32m$textColored\033[0m $nonColoredText"  # Green text
  elif (( $(awk 'BEGIN {print ("'"$float_value"'" >= 0.1 && "'"$float_value"'" < 0.25)}') )); then
    echo -e "\033[33m$textColored\033[0m $nonColoredText"  # Orange text
  elif (( $(awk 'BEGIN {print ("'"$float_value"'" >= 0.25)}') )); then
    echo -e "\033[31m$textColored\033[0m $nonColoredText"  # Red text
  else
    echo -e "\033[35m$textColored\033[0m $nonColoredText"
  fi
}

# Check if directory parameter is provided
if [ -z "$1" ]; then
  echo "Directory path not provided."
  exit 1
fi

directory="$1"

# Check if the directory exists
if [ ! -d "$directory" ]; then
  echo "Directory not found."
  exit 1
fi

simplifiedDirectory="./$directory/CLS-simplified"
localId=${directory#"report-"}


# create cls directory
if [ ! -d "$simplifiedDirectory" ]; then
  echo "Create CLS directory $simplifiedDirectory"
  mkdir "$simplifiedDirectory"
fi

# Fetch all JSON files in the directory
json_files=$(find "$directory" -maxdepth 1 -type f -name "*.json")

# instruction
display_text "CLS < 0.1 => All good CLS" "0"
display_text "0.1 >= CLS < 0.25 => need improvement" "0.15"
display_text "CLS >= 0.25 => very bad" "0.33"
display_text "CLS === null  => page/raport is corrupted or not exists" "null"

# Iterate over each JSON file
for json_file in $json_files; do

  filenameD=$(basename "$json_file")

  # Read the JSON from the file
  json=$(cat "$json_file")

  if [[ $filenameD == *.report.json ]]; then
  	filename=$(echo "$filenameD" | sed 's/\.report\.json$/.json/')
  else
  	filename="$filenameD"
  fi

  full_pathname="$(echo "$filename" | sed 's/_/\//g')"
  sanitized_fullpathname="${full_pathname%.json}"

  # Extract the "cumulative-layout-shift" object
  cumulative_layout_shift=$(echo "$json" | jq '.audits."cumulative-layout-shift"')
  numericValue=$(echo "$json" | jq '.audits."cumulative-layout-shift".displayValue')

  display_text "CLS Score: $numericValue" "$numericValue" "$sanitized_fullpathname"

  # Add the new property with the JSON file name
  address_property=$(jq -n --arg www_address "$sanitized_fullpathname" '{$www_address}')
  localIdDate_property=$(jq -n --arg localIdDate "$localId" '{$localIdDate}')
  modified_cumulative_layout_shift=$(echo "$cumulative_layout_shift" | jq --argjson newProp "$address_property" '. + $newProp' | jq --argjson newProp "$localIdDate_property" '. + $newProp' )

  # Output the modified JSON object
  echo "$modified_cumulative_layout_shift" > "$simplifiedDirectory/$filename"

done
