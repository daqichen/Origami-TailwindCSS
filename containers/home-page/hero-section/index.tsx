import Link from 'next/link';
import { styles } from './style';

const HeroSection = () => {
  return (
    <>
      <div className={styles.headerSection}>
        <h1
          className={styles.header}>
          Happy New Year!
        </h1>
        <div className={styles.headerSub}>
          <div>
            From&nbsp;<code className="font-sans font-bold">Jen</code> &nbsp;
          </div>
          <div>
            To&nbsp;<code className="font-sans font-bold">You</code>
          </div>
        </div>
      </div>

      <div className={styles.bodySection}>
        <p className="font-bold text-2xl leading-10">
          Here you can find the original pictures of the caricature paintings in your Christmas/New Year Card!
          <br /><br />
          Hope you enjoy the small element of surprise &#127873;
          <br /><br />
          Wishing you a happy new year! &#129346;&#127882;&#127881;
        </p>
      </div>

      <div className={styles.highlightSection}>
        <Link
          href="https://photos.app.goo.gl/dsx38erJPQo7qRGi8"
          className={styles.button_link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className={styles.button_subTitle}>
            Shared Google Photo Album
          </p>
          <h2 className={styles.button_title}>
            My 2023 Highlights{' '}
            <span className={styles.button_arrow}>
              -&gt;
            </span>
          </h2>
        </Link>
        <Link
          href="#photographs"
          className={styles.button_link}
        >
          <p className={styles.button_subTitle}>
            Click to see:
          </p>
          <h2 className={styles.button_title}>
            Original Photographs{' '}
            <span className={styles.button_arrow}>
              -&gt;
            </span>
          </h2>

        </Link>
        <Link
          href="#paintings"
          className={styles.button_link}
        >
          <p className={styles.button_subTitle}>
            Click to see:
          </p>
          <h2 className={styles.button_title}>
            Caricature Paintings{' '}
            <span className={styles.button_arrow}>
              -&gt;
            </span>
          </h2>

        </Link>
      </div>
    </>
  )
};

export default HeroSection;