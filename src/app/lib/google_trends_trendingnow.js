const { getJson } = require("serpapi");

// Load API key from environment variables
const apiKey = process.env.SERPAPI_KEY;

if (!apiKey) {
  throw new Error("API key is missing. Set SERPAPI_KEY in your environment variables.");
}

async function getGoogleTrendsTrendingNow(geo = "IN") {
getJson({
  api_key: "57ccaad1d3ffcdc09d78eff229aec75763e6c2a5eb60192038152836f0715353",
  engine: "google_trends_trending_now",
  geo: "US"
}, (json) => {
  console.log(json);
});
