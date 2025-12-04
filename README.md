AI Voice Intake™ — Developer Examples & Starter Kits

AI Voice Intake™ is a realtime intake engine that listens, reasons, and returns structured JSON + Smart Reports from any conversation.

This repository contains starter flows, demo scripts, tutorials, and example integrations to help you build voice-driven apps in minutes.

🚀 Quick Start — Build Your First Intake in 2 Minutes
1. Create your API key

Visit → https://aivoiceintake.com/developers

Create a key (starts with aivi_) and use it in all authenticated requests.

2. Start a new intake session
curl -X POST https://api.aivoiceintake.com/api/realtime/start \
  -H "Authorization: Bearer <YOUR_API_KEY>" \
  -H "Content-Type: application/json" \
  -d '{ "app": "dev", "projectType": "support_ticket" }'


This returns:

sessionId

nextQuestion

progress

state.fields (initial empty state)

3. Answer the question
curl -X POST https://api.aivoiceintake.com/api/realtime/chunk?sessionId=<SESSION_ID> \
  -H "Authorization: Bearer <YOUR_API_KEY>" \
  -H "Content-Type: application/json" \
  --data-binary "My checkout page keeps crashing"

4. Advance the engine (get next question)
curl -X POST https://api.aivoiceintake.com/api/realtime/stream-turn \
  -H "Authorization: Bearer <YOUR_API_KEY>" \
  -H "Content-Type: application/json" \
  -d '{ "sessionId": "<SESSION_ID>" }'

5. Stop & return final Smart Report
curl -X POST https://api.aivoiceintake.com/api/realtime/stop \
  -H "Authorization: Bearer <YOUR_API_KEY>" \
  -H "Content-Type: application/json" \
  -d '{ "sessionId": "<SESSION_ID>" }'

📦 What's Inside This Repo
/flows
  support_ticket.json
  appointment_booking.json
  home_services_bathroom_remodel.json

/examples
  curl/
    start.sh
    answer.sh
    complete.sh
  node/
    example.js
  python/
    example.py

/docs
  architecture.png
  flow_schema_reference.md

🧩 Flow Schema

Each schema defines:

flow[] → the questions to ask

fill → structured fields the engine should populate

completeWhen[] → list of required fields

Example:

{
  "flow": [
    { "ask": "What is your name?", "fill": "contact.name" },
    { "ask": "What is your email?", "fill": "contact.email" },
    { "ask": "Briefly describe the issue.", "fill": "ticket.summary" }
  ],
  "completeWhen": ["contact.name", "contact.email", "ticket.summary"]
}

📚 Docs

Full documentation:
https://aivoiceintake.com/docs

Realtime engine reference:
https://aivoiceintake.com/docs/api

Playground (schema builder):
https://aivoiceintake.com/playground

🤝 Contributing

Pull requests welcome!
Open issues for:

New examples

Framework integrations (Next.js, React Native, Flutter)

Bug reports

Docs improvements

💬 Community

Follow updates:
📌 X — https://x.com/aivoiceintake

📌 LinkedIn — https://linkedin.com/company/aivoiceintake
 (coming)

📝 License

MIT License — see LICENSE file.

END OF README

☑️ Paste
☑️ Commit
☑️ Let me know once done
