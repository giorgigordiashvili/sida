import clsx from 'clsx';
import styles from './Footer.module.scss';
import Image from 'next/image';
import DonateButton from '../DonateButton/DonateButton';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.leftLine}></div>
          <Image
            src="/assets/images/sidaLogo.svg"
            alt="logo"
            width={0}
            height={0}
            className={clsx(styles.logo, styles.pc)}
          />
          <div className={styles.rightLine}></div>
        </div>
        <div className={styles.center}>
          <div className={styles.donate}>
            <h1>Donate To Change The World</h1>
            <p className={styles.donateText}>
              category that involves giving financial or to a materialt support various causes
              organizations It allows not
            </p>
            <DonateButton />
          </div>
          <div className={styles.servicesLinks}>
            <div className={styles.services}>
              <h2>Services</h2>
              <ul>
                <li>Incident Responder</li>
                <li>Secure Managed Fund</li>
                <li>Clean Water All</li>
                <li>Give Education</li>
              </ul>
            </div>
            <div className={styles.services}>
              <h2>Links</h2>
              <ul>
                <li>Food to individuals</li>
                <li>Temporary housing</li>
                <li>Local shelters</li>
                <li>Natural disasters</li>
              </ul>
            </div>
          </div>
          <div className={styles.contact}>
            <h2>Contact Info</h2>
            <div className={styles.contactInfo}>
              <div className={styles.phoneMail}>
                <Image src="/assets/icons/phone.svg" width={16} height={16} alt="phone" />
                <p>+088 (246) 642-27-10</p>
              </div>
              <div className={styles.phoneMail}>
                <Image src="/assets/icons/mail.svg" width={18.77} height={12.85} alt="mail" />
                <p>example@mail.com</p>
              </div>
            </div>
            <div className={styles.socialMedia}>
              <div className={styles.media}>
                <Image src="/assets/icons/facebook.svg" width={10} height={16} alt="f" />
              </div>
              <div className={styles.media}>
                <Image src="/assets/icons/twitter.svg" width={16} height={16} alt="f" />
              </div>
              <div className={styles.media}>
                <Image src="/assets/icons/instagram.svg" width={14} height={16} alt="f" />
              </div>
              <div className={styles.media}>
                <Image src="/assets/icons/pinterest.svg" width={11} height={14} alt="f" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.bottomText}>© Sida 2024 | All Rights Reserved</div>
          <div className={styles.footerLinks}>
            <Link href="#" className={styles.footerLink}>
              Privacy Policy
            </Link>
            <Link href="#" className={styles.footerLink}>
              Terms of Service
            </Link>
            <Link href="#" className={styles.footerLink}>
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
