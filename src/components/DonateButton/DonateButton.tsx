import styles from './DonateButton.module.scss';
import Image from 'next/image';

export default function DonateButton() {
  return (
    <button className={styles.button}>
      <Image
        src="/assets/icons/arrowRight.svg"
        width={14}
        height={16}
        alt="arrowRight"
        className={styles.arrow}
      />
      <p>DONATE NOW</p>
    </button>
  );
}
