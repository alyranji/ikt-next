import { Popover, PopoverButton } from '@headlessui/react';

import Link from 'next/link';
function OurCustomers() {
  return (
    <div>
      <Popover>
        <Link href='#'>
          <PopoverButton className='flex items-center font-bold outline-none hover:text-primary'>
            مشتریان ما
          </PopoverButton>
        </Link>
      </Popover>
    </div>
  );
}

export default OurCustomers;
