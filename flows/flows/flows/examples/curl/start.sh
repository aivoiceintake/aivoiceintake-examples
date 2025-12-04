#!/usr/bin/env bash
# Start a support ticket intake session

API_KEY="aivi_your_api_key_here"

curl -sS https://api.aivoiceintake.com/api/v1/intake/start \
  -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "schema": {
      "flow": [
        { "ask": "What is your name?", "fill": "contact.name" },
        { "ask": "What is your email?", "fill": "contact.email" },
        { "ask": "Briefly describe the issue.", "fill": "ticket.summary" }
      ],
      "completeWhen": ["contact.name", "contact.email", "ticket.summary"]
    }
  }'
