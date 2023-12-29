import Image from 'next/image'
import Link from 'next/link';

const HolidayCard = () => {
    return(
        <>
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <h1
              className="relative w-[max-content] font-mono text-2xl before:absolute before:inset-0 before:animate-typewriter before:bg-black after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-white">
              Happy New Year! 
          </h1>
          <div className="fixed pb-10 bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-black via-black dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
              <div>
                From&nbsp;<code className="font-mono font-bold">Jen</code> &nbsp;
              </div>
              <div>
                To&nbsp;<code className="font-mono font-bold">You</code>
              </div>
          </div>
        </div>

        <div className=" p-15 mb-20 relative flex py-20 place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <p className="font-bold text-2xl leading-10">
              Here you can find the original pictures of the caricature paintings in your Christmas/New Year Card!
              <br/><br/>
              Hope you enjoy the small element of surprise &#127873;
              <br/><br/>
              Wishing you a happy new year! &#129346;&#127882;&#127881;
          </p>
        </div>

      <div className=" p-15 mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
        <a
          href="https://photos.app.goo.gl/dsx38erJPQo7qRGi8"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            My 2023 Highlights{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Shared Google Photo Album
          </p>
        </a>
        <Link
          href="#photographs"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Click to see:
          </p>
          <h2 className={`mt-3 text-2xl font-semibold`}>
            Original Photographs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          
        </Link>
        <Link
          href="#paintings"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Click to see:
          </p>
          <h2 className={`mt-3 text-2xl font-semibold`}>
            Caricature Paintings{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          
        </Link>
      </div>
        </>
    )
};

export default HolidayCard;