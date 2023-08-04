#!/bin/bash

url="https://beeyay.com/sitemap.xml"
output_sitemap="./config/sitemapProd.xml"
output_urls="./config/allUrlsProd.txt"
key="dGlja2V0ZXg6VGlja2V0ZXgyMDE4"

# Fetch the sitemap.xml file using curl with authorization header and store the result in a variable
sitemap=$(curl "$url")

# Print the contents of the fetched sitemap.xml
#echo "$sitemap"

# Extract the URLs from the sitemap XML using grep and sed
urls=$(echo "$sitemap" | grep -o '<loc>[^<]*</loc>' | sed 's/<loc>\(.*\)<\/loc>/\1/')


# Save the extracted URLs to a file
echo "$urls" > "$output_urls"
echo "URLs saved to $output_urls"


echo "$sitemap" > "$output_sitemap"
echo "Sitemap saved to $output_sitemap"

