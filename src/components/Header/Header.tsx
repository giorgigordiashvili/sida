import DonateButton from '../DonateButton/DonateButton';
import HeaderLink from '../HeaderLink/HeaderLink';
import styles from './Header.module.scss';
import Image from 'next/image';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Image
          src="/assets/images/sidaLogo.svg"
          alt="logo"
          width={0}
          height={0}
          className={styles.logo}
        />
        <div className={styles.content}>
          <div className={styles.links}>
            <HeaderLink title="Home" href="/" />
            <HeaderLink title="About Us" href="/" />
            <HeaderLink title="Services" href="/" />
            <HeaderLink title="Projects" href="/" />
            <HeaderLink title="Blog" href="/" />
            <HeaderLink title="Page" href="/" />
            <HeaderLink title="Contact" href="/" />
          </div>
          <div className={styles.navigation}>
            <Image
              src="/assets/icons/user.svg"
              width={18}
              height={20}
              alt="user"
              style={{ cursor: 'pointer' }}
            />
            <Image
              src="/assets/icons/loop.svg"
              width={20}
              height={20}
              alt="loop"
              style={{ cursor: 'pointer' }}
            />
            <DonateButton />
          </div>
        </div>
      </div>
    </header>
  );
}
