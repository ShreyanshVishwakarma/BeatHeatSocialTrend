import getRedditTopPosts from "./reddit_toprslash";

export default async function getRedditTopPostsPopular(limit = 15, time = 'today') {
    let data = await getRedditTopPosts('popular', limit, time)
        .catch((error) => {
            console.error('Error fetching Reddit data:', error);
            return null;
        });
    if (!data) {
        return [];
    }
    let json = await data.json();
    if (!json || !json.data || !json.data.children) {
        console.error('Invalid Reddit data format:', json);
        return [];
    }
    return json.data.children;
}