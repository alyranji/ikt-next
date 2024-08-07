import React from 'react';
import Header from '../components/header';

import localFont from 'next/font/local';
import './globals.css';

const yekanBakh = localFont({
  src: [
    {
      path: '../public/fonts/YekanBakhFaNum-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
});
export const metadata = {
  title: 'اینوتکس ایران',
  description: 'شرکت مشاوره مدیریت دانش',
};

export default function RootLayout({ children }) {
  return (
    <html lang='fa' dir='rtl'>
      <body
        className={`${yekanBakh.className} bg-[url('https://inknowtex.ir/wp-content/uploads/2022/04/Asset-1.svg')] bg-cover bg-no-repeat`}
      >
        <Header transparency={false} />

        {children}
      </body>
    </html>
  );
}
