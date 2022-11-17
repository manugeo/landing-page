import Image from 'next/image';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { Market } from '../types'
import styles from './../../styles/Card.module.css';
import useWindowSize from '../hooks/useWindowSize';

const Card = (prop: { market: Market, index: number }) => {
  const { market, index } = prop;
  const { name, rating, features } = market;
  const { width } = useWindowSize();

  return (
    <div className={styles.container}>
      <Image
        className={styles.headerImage}
        src={`/images/card-banner-${name}.jpg`}
        height={(width >= 800) ? 500 : 183}
        width={(width >= 800) ? 890 : 325}
        alt={`${name}-banner`}
      />
      <div className={styles.content}>
        <div className={styles.titleRow}>
          <h1>{`${index + 1}.`}</h1>
          <Image
            src={`/images/${name}-logo.png`}
            height={44}
            width={191}
            alt={`${name}-logo`}
          />
        </div>

        <p className={styles.ratingText}>{`Rating ${rating}`}</p>

        {features.map(feature => {
          return (
            <div className={styles.featureContainer} key={feature.id}>
              {feature.status ? <FaCheckCircle color='#4FDFB1' /> : <FaTimesCircle color='#ef4539' />}
              <p className={styles.featureItem}>{feature.name}</p>
            </div>
          );
        })}

        <button className={styles.button}>{`Visit ${name}`}</button>

        <p className={styles.visitSiteText}>Visit Site</p>
      </div>
    </div>
  );
};

export default Card;