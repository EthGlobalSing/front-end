import { dynamic_env } from '@/app/environment/dynamic';
import { getAuthToken } from '@dynamic-labs/sdk-react-core';

export async function POST(request: Request) {
  try {
    const dynamicJwtToken = getAuthToken();

    const response = await fetch(
      `https://app.dynamicauth.com/api/v0/environments/${dynamic_env}/embeddedWallets`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${dynamicJwtToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier: "mathisrgt",
        type: "socialUsername",
        chain: "EVM",
        socialProvider: "telegram"
      })
    }
    );

    const result = await response.json();
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    console.error("Error in POST wallet creation request:", error);
    return new Response("Failed to process wallet creation request", { status: 500 });
  }
}
