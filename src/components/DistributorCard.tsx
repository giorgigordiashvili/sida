'use client';
import React from 'react';
import styled from 'styled-components';
import Typography from './ui/Typography';

const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  background-color: white;
  border-radius: 50px;
  padding: 10px;
  box-shadow: 0px 0px 60px 0px #0000000d;
  height: 100px;
  width: 300px;
  @media (max-width: 700px) {
    width: 176px;
    height: 60px;
    padding: 6px 10px;
  }
`;

const AvatarWrapper = styled.div`
  background: linear-gradient(0deg, #16171a 0%, #e20935 100%);
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 700px) {
    width: 48px;
    height: 48px;
  }
`;

const Avatar = styled.img`
  width: 78px;
  height: 78px;
  border-radius: 50%;
  object-fit: cover;
  background: #d9d9d9;
  @media (max-width: 700px) {
    width: 46px;
    height: 46px;
  }
`;

type Props = {
  name: string;
  imageSrc: string;
};

const DistributorCard: React.FC<Props> = ({ name, imageSrc }) => {
  return (
    <Card>
      <AvatarWrapper>
        <Avatar src={imageSrc} alt={name} />
      </AvatarWrapper>
      <Typography variant="lBodytext">{name}</Typography>
    </Card>
  );
};

export default DistributorCard;
