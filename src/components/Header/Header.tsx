import DonateButton from '../DonateButton/DonateButton';
import HeaderLink from '../HeaderLink/HeaderLink';
import styles from './Header.module.scss';
import Image from 'next/image';
import clsx from 'clsx';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Image
          src="/assets/images/sidaLogo.svg"
          alt="logo"
          width={0}
          height={0}
          className={clsx(styles.logo, styles.pc)}
        />

        <Image
          src="/assets/images/sidaLogoMobile.svg"
          alt="logo"
          width={0}
          height={0}
          className={clsx(styles.logo, styles.mobile)}
        />

        <div className={styles.content}>
          <div className={clsx(styles.links, styles.pc)}>
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
              className={styles.user}
            />
            <Image
              src="/assets/icons/menuIcon.svg"
              width={23.1}
              height={16.5}
              alt="loop"
              style={{ cursor: 'pointer' }}
              className={clsx(styles.menuIcon, styles.mobile)}
            />
            <Image
              src="/assets/icons/loop.svg"
              width={20}
              height={20}
              alt="loop"
              style={{ cursor: 'pointer' }}
              className={styles.loop}
            />
            <DonateButton />
          </div>
        </div>
      </div>
    </header>
  );
}
