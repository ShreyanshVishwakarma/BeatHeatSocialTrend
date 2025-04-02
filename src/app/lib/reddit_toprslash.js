export default async function getRedditTopPosts(subreddit, limit = 15,time ='today') {
    let url = `https://www.reddit.com/r/${subreddit}/top.json?limit=${limit}&t=${time}`;
    let data = await fetch(url)
    .catch((error) => {
        console.error('Error fetching Reddit data:', error);
        return null;
    });
    if (!data) {
        return [];
    }
    let json = await data.json();
    return json.data.children;
}