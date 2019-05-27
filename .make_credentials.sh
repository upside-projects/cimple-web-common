#!/usr/bin/env bash
mkdir ~/.aws
cat > ~/.aws/credentials << EOL
[production]
aws_access_key_id = ${WEBSITE_PROD_ACCESS_KEY}
aws_secret_access_key = ${WEBSITE_PROD_SECRET}
EOL