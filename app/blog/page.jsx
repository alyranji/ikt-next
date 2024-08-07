import React from 'react';
import { nLastPosts } from '../../_lib/api';
import Image from 'next/image';
import Link from 'next/link';

export default async function Blog() {
  const posts = await nLastPosts(100);

  return (
    <>
      <h1 className='py-7 text-center'>Blog</h1>
      <section className='container mx-auto mt-7 flex flex-wrap gap-4'>
        {posts && posts.length > 0 ? (
          posts.map((post) => (
            <Link
              href={`/blog${post?.uri}`}
              className='flex w-[32%] flex-col justify-around rounded-md bg-white p-2 shadow-lg hover:bg-slate-200'
            >
              <div key={post.postId}>
                <Image
                  src={post?.featuredImage?.node.sourceUrl}
                  width={500}
                  height={500}
                  alt={post?.featuredImage?.node.altText}
                  className='h-[150px] rounded'
                />
                <div>{post?.title}</div>
              </div>
            </Link>
          ))
        ) : (
          <div>
            <p>Loading ...</p>
          </div>
        )}
      </section>
    </>
  );
}
