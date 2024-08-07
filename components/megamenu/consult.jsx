import Link from 'next/link';

function Consult() {
  return (
    <div className='mx-auto flex justify-center border-t-2 py-3'>
      <div className='container flex justify-start'>
        <div className='ml-3 text-xs hover:text-primary'>
          <Link href='#'>درخواست دمو</Link>{' '}
        </div>

        <div className='text-xs hover:text-primary'>
          <Link href='#'>درخواست مشاوره</Link>{' '}
        </div>
      </div>
    </div>
  );
}

export default Consult;
