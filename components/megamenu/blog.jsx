import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import Image from 'next/image';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import DoorDashFavorite from '../../public/loader/BlogItem';
import Consult from './consult';
import convertToJalali from '../../utils/gmttojalali';

function BlogMegamenu({ posts }) {
  return (
    <div>
      <Popover>
        {({ open }) => (
          <>
            <PopoverButton
              className={
                open
                  ? 'flex items-center font-bold text-primary outline-none'
                  : 'flex items-center font-bold outline-none hover:text-primary'
              }
            >
              بلاگ
              {open ? (
                <ChevronUpIcon className='h-5 w-5 font-bold' />
              ) : (
                <ChevronDownIcon className='h-5 w-5' />
              )}
            </PopoverButton>
            <PopoverPanel className='absolute left-0 top-28 w-full bg-white shadow-md'>
              <div className='container m-auto flex flex-wrap gap-3 py-6'>
                <Link
                  href='#'
                  target='_blank'
                  className='flex flex-1 flex-col gap-3 p-4 hover:rounded hover:bg-[#dfdfdf]'
                >
                  {posts[0] ? (
                    <Image
                      alt={posts[0].featuredImage.node.altText}
                      src={posts[0].featuredImage.node.sourceUrl}
                      height={2000}
                      width={2000}
                      className='h-[300px] w-[100%] rounded object-cover'
                    />
                  ) : (
                    <DoorDashFavorite className='h-full w-full' />
                  )}
                  <h3 className='text-xl font-bold'>{posts[0]?.title}</h3>
                  <div
                    className='text-sm text-gray-600'
                    dangerouslySetInnerHTML={{ __html: posts[0]?.excerpt }}
                  />
                </Link>
                <section className='flex flex-1 flex-col'>
                  {posts?.slice(1).map((post) => (
                    <Link
                      key={post.postId}
                      href={post.uri}
                      className='flex h-1/5 gap-3 p-2 hover:rounded-md hover:bg-[#dfdfdf]'
                    >
                      <Image
                        alt={post.featuredImage.node.altText}
                        src={post.featuredImage.node.sourceUrl}
                        width={1000}
                        height={1000}
                        className='h-auto w-1/4 rounded-md object-cover'
                      />
                      <div className='flex flex-col justify-evenly'>
                        <div>
                          <h3>{post.title}</h3>
                        </div>

                        <div>
                          <span className='text-sm text-[#717171]'>
                            {convertToJalali(post.dateGmt)}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </section>
              </div>
              <Consult />
            </PopoverPanel>
          </>
        )}
      </Popover>
    </div>
  );
}

export default BlogMegamenu;
