import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';

import {
  ChevronUpIcon,
  ChevronDownIcon,
  ComputerDesktopIcon,
  ListBulletIcon,
} from '@heroicons/react/24/solid';
import Link from 'next/link';
function FeaturesMegamenu() {
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
              کاربردها
              {open ? (
                <ChevronUpIcon className='h-5 w-5 font-bold' />
              ) : (
                <ChevronDownIcon className='h-5 w-5' />
              )}
            </PopoverButton>
            <PopoverPanel className='min-h-auto absolute left-0 top-28 w-full bg-white shadow-md'>
              <div className='container m-auto flex justify-between gap-4 py-6'>
                <Link href='#' className='w-1/3'>
                  <div className='flex-shrink-1 flex flex-grow-0 gap-3 rounded-md px-3 py-11 hover:bg-[#DFDFDF] hover:shadow-sm'>
                    <div>
                      <ListBulletIcon className='h-7 w-7 text-primary' />
                    </div>
                    <div className='flex flex-col gap-2'>
                      <h3 className='text-lg font-bold'>
                        نرم افزار مدیریت دانش
                      </h3>
                      <p className='text-sm'>
                        با «رای‌ون»، ثبت، جستجو و گزارش‌گیری پیشرفته از دانش
                        سازمانی را تجربه کنید.
                      </p>
                    </div>
                  </div>
                </Link>

                <div className='flex flex-1 flex-col gap-4'>
                  <div>
                    <h3 className='border-b-2 border-[#DFDFDF] pb-3 font-bold'>
                      مدیریت دانش در صنایع
                    </h3>
                  </div>
                  <div>
                    <ul>
                      <Link href='#'>
                        <li className='py-2 indent-2 hover:rounded-md hover:bg-[#DFDFDF]'>
                          بانکداری، پرداخت و فناوری مالی
                        </li>
                      </Link>
                    </ul>
                  </div>
                </div>
                <div className='flex flex-1 flex-col gap-4'>
                  <div>
                    <h3 className='border-b-2 border-[#DFDFDF] pb-3 font-bold'>
                      مدیریت دانش در صنایع
                    </h3>
                  </div>
                  <div>
                    <ul>
                      <Link href='#'>
                        <li className='py-2 indent-2 hover:rounded-md hover:bg-[#DFDFDF]'>
                          بانکداری، پرداخت و فناوری مالی
                        </li>
                      </Link>
                    </ul>
                  </div>
                </div>
              </div>
            </PopoverPanel>
          </>
        )}
      </Popover>
    </div>
  );
}

export default FeaturesMegamenu;
