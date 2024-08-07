import { env } from 'process';

const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

async function fetchApi(query = '', variables = {}) {
  if (!API_URL) {
    throw new Error('API_URL is not defined');
  }

  const headers = { 'Content-Type': 'application/json' };

  if (process.env.NEXT_PUBLIC_WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers['Authorization'] =
      `Bearer ${process.env.NEXT_PUBLIC_WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }

  try {
    const res = await fetch(
      API_URL,
      {
        headers,
        method: 'POST',
        body: JSON.stringify({
          query,
          variables,
        }),
      },
      {
        next: { revalidate: 20 },
      },
    );

    const json = await res.json();

    if (json.errors) {
      console.error(json.errors);
      throw new Error('Failed to fetch API');
    }

    return json.data;
  } catch (error) {
    console.error('Fetch API error:', error);
    throw error;
  }
}

export async function nLastPosts(n) {
  try {
    const data = await fetchApi(
      `
      query nLastPosts($first: Int) {
  posts(first: $first) {
      nodes {
      title
      featuredImage {
        node {
          altText
          sourceUrl
        }
      }
      excerpt
      uri
      postId
      dateGmt
    }
  }
}
    `,
      {
        first: n,
      },
    );

    return data?.posts?.nodes || [];
  } catch (error) {
    console.error('Error fetching header posts:', error);
    return [];
  }
}
export async function getDom(uri) {
  try {
    const data = await fetchApi(
      `query getDom($uri: ID!) {
  page(id: $uri, idType: URI) {
    title
    content
    featuredImage {
      node {
        sourceUrl
      }
    }
  }
}`,
      { uri },
    );

    return data?.page || [];
  } catch (error) {
    console.error('Error fetching DOM :', error);
    return [];
  }
}

export async function getPostByUri(uri) {
  try {
    const post = await fetch(
      `${env.NEXT_PUBLIC_WORDPRESS_REST_API_URL}/wp/v2/posts?slug=${uri}`,
    ).then((res) => res.json());
    return post[0];
  } catch (error) {
    console.log('error while retrieving single post', error);
  }
}
