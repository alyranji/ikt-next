import { getDom } from '../_lib/api';
import extractDOM from '../utils/extractDOM';
import Image from 'next/image';

const customerLogos = {
  'نفت و گاز پارس':
    'https://inknowtex.ir/wp-content/uploads/2022/09/نفت-و-گاز-پارس.svg',
  'شرکت مخابرات ایران':
    'https://inknowtex.ir/wp-content/uploads/2022/09/شرکت-مخابرات-ایران.svg',
  'شهرداری اصفهان':
    'https://inknowtex.ir/wp-content/uploads/2022/09/شهرداری-اصفهان.svg',
  'شهرداری مشهد':
    'https://inknowtex.ir/wp-content/uploads/2022/09/شهرداری-مشهد.svg',
  'شرکت گاز استان تهران':
    'https://inknowtex.ir/wp-content/uploads/2022/09/شرکت-گاز-استان-تهران.svg',
  'مپنا توگا':
    'https://inknowtex.ir/wp-content/uploads/2022/09/شرکت-مهندسی-و-ساخت-توربین-مپنا-توگا.svg',
  'مپنا توگا':
    'https://inknowtex.ir/wp-content/uploads/2022/09/شرکت-مهندسی-و-ساخت-توربین-مپنا-توگا.svg',
  'مپنا توگا':
    'https://inknowtex.ir/wp-content/uploads/2022/09/شرکت-مهندسی-و-ساخت-توربین-مپنا-توگا.svg',
  'مپنا توگا':
    'https://inknowtex.ir/wp-content/uploads/2022/09/شرکت-مهندسی-و-ساخت-توربین-مپنا-توگا.svg',
  'مپنا توگا':
    'https://inknowtex.ir/wp-content/uploads/2022/09/شرکت-مهندسی-و-ساخت-توربین-مپنا-توگا.svg',
  'مپنا توگا':
    'https://inknowtex.ir/wp-content/uploads/2022/09/شرکت-مهندسی-و-ساخت-توربین-مپنا-توگا.svg',
};

export default async function Page() {
  try {
    const res = await getDom('home');
    const extractedContent = extractDOM(res);
    console.log(extractedContent);

    return (
      <div>
        <section className='container mx-auto my-[60px] flex h-[450px]'>
          <div className='flex flex-1 flex-col justify-around pl-[3rem]'>
            <h1 className='text-[36px] font-semibold text-secondary'>
              نرم‌افزار رای‌وَن{' '}
              <span className='text-primary'>مغز دیجیتال</span> سازمان شما
            </h1>
            <p className='whitespace-pre-line text-[20px] font-normal text-fourthColor'>
              {extractedContent.paragraphs[0]}
            </p>
            <div className='flex flex-row gap-7'>
              <button className='w-[11em] rounded bg-primary px-[20px] py-[16px] text-[20px] text-white hover:bg-primary_hover'>
                درخواست دمو
              </button>
              <button className='w-[11em] rounded border-2 border-primary px-[20px] py-[16px] text-[20px] text-primary hover:bg-primary hover:text-white'>
                درخواست مشاوره
              </button>
            </div>
          </div>
          <div className='flex flex-1 items-center justify-center'>
            <Image
              src={extractedContent.images[0].src}
              width={500}
              height={500}
              className='w-full p-[10px]'
            />
          </div>
        </section>
        <div className='container mx-auto flex'>
          <section className='flex flex-1 flex-row flex-wrap justify-between'>
            {Object.entries(customerLogos).map(([key, value]) => (
              <div
                key={key}
                className='flex w-[70px] flex-col items-center justify-center'
              >
                <Image
                  src={value}
                  alt={key}
                  width={100}
                  height={100}
                  className=''
                />
                <p className='text-[12px]'>{key}</p>
              </div>
            ))}
          </section>
          <div className='flex-1'></div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return <div>Error loading data.</div>;
  }
}
