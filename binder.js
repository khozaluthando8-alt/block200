// functions/api/secure-route.js
import { processSecureTransaction } from './my-secure-logic.js';

export async function onRequestPost(context) {
  try {
    // Read the incoming request body from the frontend browser
    const data = await request.json();
    
    // Pull the injected secrets directly out of Cloudflare's context.env object
    const privateKey = context.env.SECRET_PRIVATE_KEY;
    const rpcProvider = context.env.RPC_PROVIDER_URL;

    // Execute your custom backend logic safely behind the scenes
    const result = await processSecureTransaction(data, privateKey, rpcProvider);

    return new Response(JSON.stringify({ success: true, result }), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: err.message }), { 
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
