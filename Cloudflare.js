// functions/api/execute.js

// Import your custom business logic script
import { processSecureTransaction } from './my-secure-logic.js';

export async function onRequestPost(context) {
  try {
    // 1. Pull the secret directly from the injected environment context
    const privateKey = context.env.MY_PRIVATE_KEY;
    const providerUrl = context.env.PROVIDER_URL; // You can pull normal variables too

    if (!privateKey) {
      return new Response(JSON.stringify({ error: "Configuration missing on edge server." }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }

    // 2. Read the frontend user's incoming data payload
    const incomingData = await context.request.json();

    // 3. Pass the secrets directly into your custom script functions
    const executionResult = await processSecureTransaction(incomingData, privateKey, providerUrl);

    // 4. Return only the safe, finalized results back to the browser
    return new Response(JSON.stringify({ success: true, result: executionResult }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
}