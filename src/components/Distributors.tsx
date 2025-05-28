'use client';
import React from 'react';
import styled from 'styled-components';
import DistributorCard from './DistributorCard';
import Typography from './ui/Typography';

const Wrapper = styled.section`
  padding: 120px;
  text-align: center;
  width: 100%;
  min-height: 593px;
  background: #f2f0ec;
  margin-bottom: -120px;

  @media (max-width: 1080px) {
    padding: 30px 75px 60px 75px;
    margin-bottom: -60px;
  }
`;

// const Grid = styled.div`
//   margin-top: 60px;
//   display: grid;
//   gap: 30px;
//   grid-template-columns: repeat(4, auto);
//   justify-items: center;
//   justify-content: center;
//   align-items: center;

//   @media (max-width: 1400px) {
//     grid-template-columns: repeat(2, 1fr);
//   }

//   @media (max-width: 700px) {
//     grid-template-columns: 1fr;
//     gap: 30px;
//   }
// `;

const Grid = styled.div`
  margin-top: 60px;
  /* padding-inline: 120px; */
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  @media (max-width: 700px) {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    justify-content: center;
    align-items: center;
  }
`;

type CountryDictionary = {
  countries: {
    southAfrica: string;
    germany: string;
    SouthKorea: string;
    Japan: string;
    Turkey: string;
    Indonesia: string;
  };
};

type Props = {
  dictionary: CountryDictionary;
};

const Distributors: React.FC<Props> = ({ dictionary }) => {
  const distributors = [
    { name: dictionary.countries.southAfrica, image: '#' },
    { name: dictionary.countries.germany, image: '#' },
    { name: dictionary.countries.SouthKorea, image: '#' },
    { name: dictionary.countries.Japan, image: '#' },
    { name: dictionary.countries.Turkey, image: '#' },
    { name: dictionary.countries.Indonesia, image: '#' },
  ];

  return (
    <Wrapper>
      <Typography variant="h2">
        Top Distributors <span style={{ color: '#E26D5A' }}>Around</span> World
      </Typography>

      <Grid>
        {distributors.map((dist, index) => (
          <DistributorCard key={index} name={dist.name} imageSrc={dist.image} />
        ))}
      </Grid>
    </Wrapper>
  );
};

export default Distributors;
