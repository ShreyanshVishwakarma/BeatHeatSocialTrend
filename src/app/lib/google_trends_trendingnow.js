import { get } from "node:https";
import { getJson } from "serpapi";
import dotenv from "dotenv";

dotenv.config();

const apiKey = process.env.SERPAPI_KEY;

if (!apiKey) {
  throw new Error("API key is missing. Set SERPAPI_KEY in your environment variables.");
}

export default async function getGoogleTrendsTrendingNow(geo = "IN", timeinhr = "24") {
  return new Promise((resolve, reject) => {
    getJson(
      {
        api_key: apiKey,
        engine: "google_trends_trending_now",
        hours: timeinhr,
        geo: geo,
      },
      (json) => {
        if (json.trending_searches) {
          console.error("Error fetching Google Trends data:", json.error);
          reject(json);
        } else {
          console.log("Google Trends data fetched successfully:", json);
          resolve(json);
        }
      }
    );
  });
}

