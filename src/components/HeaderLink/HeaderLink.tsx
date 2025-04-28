import Link from 'next/link';
import Image from 'next/image';
import styles from './HeaderLink.module.scss';

type Props = {
  title: string;
  href?: string;
};

export default function HeaderLink(props: Props) {
  return (
    <div className={styles.headerLink}>
      <Link className={styles.title} href={props.href || '/'}>
        {props.title}{' '}
      </Link>
      <Image
        src="/assets/icons/arrowDown.svg"
        alt="arrowDown"
        width={8}
        height={10}
        className={styles.arrow}
      />
    </div>
  );
}
