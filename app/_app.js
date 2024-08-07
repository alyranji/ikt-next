import './global.css';
import 'tailwindcss/tailwind.css';

export default function App({ Component, pageProps }) {
  return (
    <main>
      <Component {...pageProps} />
    </main>
  );
}
