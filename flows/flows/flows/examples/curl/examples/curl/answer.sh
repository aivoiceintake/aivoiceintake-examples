#!/usr/bin/env bash
# Send an answer into an existing intake session
# Usage: ./answer.sh <SESSION_ID> "your answer here"

API_KEY="aivi_your_api_key_here"
SESSION_ID="$1"
ANSWER="$2"

curl -sS https://api.aivoiceintake.com/api/v1/intake/answer \
  -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -d "{
    \"sessionId\": \"$SESSION_ID\",
    \"answer\": \"$ANSWER\"
  }"
