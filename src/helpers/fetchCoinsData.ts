import type { ResponseData, FetchStatusState } from "../types";

async function fetchCoinsData(): Promise<FetchStatusState> {
  try {
    const response = await fetch("https://api.coinlore.net/api/tickers/");
    if (!response.ok) throw new Error("Failed to fetch data");
    const data: ResponseData = await response.json();
    return { status: "success", data };
  } catch (error) {
    return { status: "failure", error: (error as Error).message };
  }
}

export default fetchCoinsData;
