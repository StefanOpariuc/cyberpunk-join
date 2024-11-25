export interface Post {
    id: string;
    title: string;
    subtitle: string;
    authors: string[];
    created: number;
    status: string;
    publish_date: number;
    displayed_date: number | null;
    split_tested: boolean;
    subject_line: string;
    preview_text: string;
    slug: string;
    thumbnail_url: string;
    web_url: string;
    audience: string;
    platform: string;
    content_tags: string[];
    meta_default_description: string | null;
    meta_default_title: string;
    hidden_from_feed: boolean;
};
export type PostsResponse = {
    data: Post[];
    page: number;
    limit: number;
    total_results: number;
    total_pages: number;
}

let CACHED_POSTS: PostsResponse = {
    data: [],
    page: 0,
    limit: 0,
    total_results: 0,
    total_pages: 0
};

//let lastSyncDate = new Date(0);

export async function GET() {

    // if (lastSyncDate && (new Date().getTime() - lastSyncDate.getTime()) < 24 * 60 * 60 * 1000) {
    //     return new Response(JSON.stringify(CACHED_POSTS), {
    //         status: 200,
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     });
    // }
    const API_KEY = process.env.API_KEY
    const PUBLICATION_ID = process.env.PUBLICATION_ID

    const response = await fetch(`https://api.beehiiv.com/v2/publications/${PUBLICATION_ID}/posts?limit=5&order_by=created&direction=desc`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${API_KEY}`
        },
    });

    const data = await response.json() as PostsResponse;
    if (response.ok && data.data.length > 0 && CACHED_POSTS.total_results !== data.total_results) {
        CACHED_POSTS = data;
        //lastSyncDate = new Date();
    }
    return new Response(JSON.stringify(data), {
        status: response.status,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}