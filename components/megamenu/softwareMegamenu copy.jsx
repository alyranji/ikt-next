import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';

import {
  ChevronUpIcon,
  ChevronDownIcon,
  ComputerDesktopIcon,
} from '@heroicons/react/24/solid';
import Link from 'next/link';
function SoftwareMegamenu() {
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
              نرم افزار مدیریت دانش
              {open ? (
                <ChevronUpIcon className='h-5 w-5 font-bold' />
              ) : (
                <ChevronDownIcon className='h-5 w-5' />
              )}
            </PopoverButton>
            <PopoverPanel className='min-h-auto absolute left-0 top-28 w-full bg-white shadow-md'>
              <section>
                <Link
                  href='#'
                  className='container m-auto flex flex-wrap gap-3 py-6'
                >
                  <div className='flex-shrink-1 flex w-[24%] flex-grow-0 gap-3 rounded-md px-3 py-11 hover:bg-slate-100 hover:shadow-sm'>
                    <div>
                      <ComputerDesktopIcon className='h-7 w-7 text-primary' />
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
              </section>
            </PopoverPanel>
          </>
        )}
      </Popover>
    </div>
  );
}

export default SoftwareMegamenu;
