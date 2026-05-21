/**
 * Cloudflare Pages Gateway Function
 * Securely exposes dashboard configurations to your client via local routing
 */
export async function onRequest(context) {
  // Pull keys securely from your Cloudflare Dashboard Environment settings
  const contractAddress = context.env.CONTRACT_ADDRESS || "0xf22Af894a5377D66D8f7E9baFE65E5e5179A9866";
  const rpcUrl = context.env.RPC_URL || "https://ethereum-sepolia-rpc.publicnode.com";

  const data = {
    success: true,
    contractAddress: contractAddress,
    rpcUrl: rpcUrl
  };

  return new Response(JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=60"
    }
  });
}
