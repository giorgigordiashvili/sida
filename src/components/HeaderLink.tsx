import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

type Props = {
  title: string;
  href?: string;
};

const StyledHeaderLink = styled.div`
  height: 34px;
  display: flex;
  gap: 5px;
  align-items: center;
  width: fit-content;

  &:hover {
    .arrow {
      filter: invert(45%) sepia(100%) saturate(7000%) hue-rotate(10deg) brightness(150%)
        contrast(85%);
    }
  }
`;

const StyledLink = styled(Link)`
  &:hover {
    color: rgba(43, 182, 115, 1);
  }
`;

export default function HeaderLink(props: Props) {
  return (
    <StyledHeaderLink>
      <StyledLink href={props.href || '/'}>{props.title} </StyledLink>
      <Image src="/assets/icons/arrowDown.svg" alt="arrowDown" width={8} height={10} />
    </StyledHeaderLink>
  );
}
