// Simple Node.js example using fetch to call the HTTP intake API v1

const API_KEY = process.env.AIVI_API_KEY || "aivi_your_api_key_here";

async function startIntake() {
  const res = await fetch("https://api.aivoiceintake.com/api/v1/intake/start", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      schema: {
        flow: [
          { ask: "What is your name?", fill: "contact.name" },
          { ask: "What is your email?", fill: "contact.email" },
          { ask: "Briefly describe the issue.", fill: "ticket.summary" }
        ],
        completeWhen: ["contact.name", "contact.email", "ticket.summary"]
      }
    })
  });

  const json = await res.json();
  console.log("START RESPONSE:", json);
  return json.sessionId;
}

async function answerIntake(sessionId, answer) {
  const res = await fetch("https://api.aivoiceintake.com/api/v1/intake/answer", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      sessionId,
      answer
    })
  });

  const json = await res.json();
  console.log("ANSWER RESPONSE:", json);
}

(async () => {
  const sessionId = await startIntake();
  await answerIntake(sessionId, "My checkout page keeps crashing at payment.");
})().catch(console.error);
