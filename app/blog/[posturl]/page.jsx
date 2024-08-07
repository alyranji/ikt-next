import React from 'react';
import { getPostByUri } from '../../../_lib/api';
import convertToJalali from '../../../utils/gmttojalali';
import Link from 'next/link';

async function SinglePost({ params }) {
  const post = await getPostByUri(params.posturl);
  const data = {
    id: post.id,
    date_gmt: post.date_gmt,
    content: post.content.rendered,
    title: post.title.rendered,
    excerpt: post.excerpt,
    author: post.yoast_head_json.author,
    slug: post.slug,
    status: post.status,
    featuredImageUrl: post.yoast_head_json.og_image[0].url,
  };
  return (
    <div>
      <Link href='/blog'>
        <h4 className='mt-5 text-center'>بازگشت به بلاگ →</h4>
      </Link>
      <div className='bg-whitea container relative mx-auto mb-10 rounded-t-lg py-32 text-center shadow-lg'>
        <p className='text-white'>
          تاریخ انتشار: {convertToJalali(data.date_gmt)}
        </p>
        <h1 className='mt-2 text-5xl font-bold text-white'>{data.title}</h1>
        <img
          className='darkenimage absolute left-0 top-0 -z-10 mt-10 h-full w-full rounded-lg object-cover'
          src={data.featuredImageUrl}
          alt=''
        />
      </div>
      <article className='prose prose-lg container mx-auto bg-white p-5'>
        <div dangerouslySetInnerHTML={{ __html: data.content }} />
      </article>
    </div>
  );
}

export default SinglePost;
