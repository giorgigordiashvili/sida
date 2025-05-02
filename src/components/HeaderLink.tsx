import Link from 'next/link';
import styled from 'styled-components';
import ArrowDown from '../../public/assets/icons/ArrowDown';

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
    :nth-child(1) {
      color: rgba(43, 182, 115, 1);
    }

    img {
      filter: invert(44%) sepia(56%) saturate(420%) hue-rotate(100deg) brightness(90%) contrast(85%);
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgba(52, 52, 52, 1);
`;

export default function HeaderLink(props: Props) {
  return (
    <StyledHeaderLink>
      <StyledLink href={props.href || '/'}>{props.title} </StyledLink>
      <ArrowDown />
    </StyledHeaderLink>
  );
}
