import Link from 'next/link';
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
    :nth-child(1) {
      color: rgba(193, 76, 59, 1);
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
    </StyledHeaderLink>
  );
}
