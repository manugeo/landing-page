import Head from 'next/head';
import Image from 'next/image';
import Card from '../components/card';
import styles from './../../styles/Home.module.css';
import bg from '../../public/images/header-bg.jpg';
import useWindowSize from '../hooks/useWindowSize';

// Note: Dummy market-places data for render.
const MARKET_PLACES = [
  {
    name: 'openSea',
    id: 1,
    rating: '9.9',
    features: [
      {
        name: 'All Sellers Verified',
        id: 1,
        status: true
      },
      {
        name: 'Get Paid to Trade NFTs',
        id: 2,
        status: true
      },
      {
        name: 'Collection Variety',
        id: 3,
        status: true
      }
    ]
  },
  {
    name: 'rarible',
    id: 2,
    rating: '8.5',
    features: [
      {
        name: 'All Sellers Verified',
        id: 1,
        status: false
      },
      {
        name: 'Get Paid to Trade NFTs',
        id: 2,
        status: true
      },
      {
        name: 'Collection Variety',
        id: 3,
        status: true
      }
    ]
  },
  {
    name: 'foundation',
    id: 3,
    rating: '8.2',
    features: [
      {
        name: 'All Sellers Verified',
        id: 1,
        status: false
      },
      {
        name: 'Get Paid to Trade NFTs',
        id: 2,
        status: false
      },
      {
        name: 'Collection Variety',
        id: 3,
        status: true
      }
    ]
  },
];

export default function Home() {
  const { width } = useWindowSize();

  return (
    <div className={styles.container}>
      <Head>
        <title>Resonsive Landing Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.header} style={{
          backgroundImage: `url(${bg.src})`
        }}>
          <Image
            className={styles.headerLogo}
            src="/images/rarible-logo.png"
            height={(width >= 800) ? 82 : 35}
            width={(width >= 800) ? 262 : 114}
            alt="Rarible Logo"
          />
          <h1 className={styles.headerTitle}>Top 3 NFT<br />Marketplaces<br />2022</h1>
          <p className={styles.headerDescription}>We’ve helped 10 million+ consumers find the best NFT Marketplace</p>
        </div>

        <div className={styles.body}>
          {MARKET_PLACES.map((market, i) => <Card key={market.id} market={market} index={i} />)}
        </div>
      </main>

      <footer className={styles.footer}>
        2022 All Rights Reserved
      </footer>
    </div>
  )
}
