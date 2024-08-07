'use client';
import { useEffect, useState } from 'react';
import { PopoverGroup } from '@headlessui/react';
import Image from 'next/image';
import { Button } from '@headlessui/react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { nLastPosts } from '../_lib/api';
import Aboutus from './megamenu/aboutUs';
import SoftwareMegamenu from './megamenu/softwareMegamenu copy';
import FeaturesMegamenu from './megamenu/featuresMegamenu';
import Services from './megamenu/services';
import OurCustomers from './megamenu/ourCustomers';
import BlogMegamenu from './megamenu/blog';

export default function Header() {
  const pathname = usePathname();
  let transparency = pathname === '/' ? true : false;
  const [fiveLastPosts, setFiveLastPosts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const [data] = await Promise.all([nLastPosts(6)]);
        setFiveLastPosts(data);
      } catch (error) {
        console.error('Error setting header posts state:', error);
      }
    }
    fetchData();
  }, []);
  return (
    <header
      className={
        transparency
          ? 'flex h-28 justify-center bg-transparent'
          : 'flex h-28 justify-center bg-white shadow-md'
      }
    >
      <div className='container flex items-center justify-between'>
        <div>
          <Link href='/' className='-m-1.5 p-1.5'>
            <Image
              alt='logo'
              src='https://inknowtex.ir/wp-content/uploads/2021/07/logo.svg'
              href='/'
              width={150}
              height={150}
            />
          </Link>
        </div>
        <nav>
          <PopoverGroup className='flex gap-10'>
            <SoftwareMegamenu />
            <FeaturesMegamenu />
            <Services />
            <OurCustomers />
            <BlogMegamenu posts={fiveLastPosts} />
            <Aboutus />
          </PopoverGroup>
        </nav>
        <div>
          <Button className='rounded-md bg-primary px-7 py-3 text-white hover:bg-primary_hover'>
            درخواست دمو
          </Button>
        </div>
      </div>
    </header>
  );
}
