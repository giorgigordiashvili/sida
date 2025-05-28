'use client';

import styled from 'styled-components';
import { useState } from 'react';
import Typography from '@/components/ui/Typography';
import PaymentOption from '@/components/PaymentOption';
import SelectAmountWrapper from '@/components/SelectAmountWrapper';
import InputWithIcon from './Input/InputWithIcon';
import InputMoney from './Input/InputMoney';
import Total from './Total';
import { getDictionary } from '@/get-dictionary';

const StyledSection = styled.section`
  width: 100%;
  margin: auto;
  padding: 120px 0;
  background-color: #f9f9f7;

  @media (max-width: 1350px) {
    padding: 0 30px;
  }

  @media (max-width: 1080px) {
    padding: 30px 16px;
  }
`;

const StyledContainer = styled.div`
  max-width: 1290px;
  width: 100%;
  margin: auto;
  padding: 80px 110px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background: #f2f0ec;
  gap: 30px;

  @media (max-width: 1080px) {
    padding: 30px 20px;
  }
`;

const RowTwo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  width: 100%;

  @media (max-width: 1080px) {
    flex-direction: column;
  }
`;

const FullWidthItem = styled.div`
  width: 100%;
`;

const AmountSection = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  width: 100%;

  @media (max-width: 1080px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const OrText = styled.div`
  font-weight: 700;
  font-size: 20px;
  color: #4d4d4d;
  margin-top: 40px;
  line-height: 34px;
`;

export default function DonationForm({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['donationDetails'];
}) {
  const [manualAmount, setManualAmount] = useState<number | null>(null);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);

  const totalAmount = manualAmount ?? selectedAmount ?? 0;

  return (
    <StyledSection>
      <StyledContainer>
        <Typography variant="h3">{dictionary.selectPaymentMethod}</Typography>
        <PaymentOption />

        <Typography variant="h3">{dictionary.personalInformation}</Typography>
        <RowTwo>
          <InputWithIcon
            label={
              <>
                {dictionary.nameLabel}
                <span style={{ color: '#E26D5A' }}>*</span>
              </>
            }
            placeholder={dictionary.namePlaceholder}
            typographyVariant="label"
            width="100%"
          />
          <InputWithIcon
            label={
              <>
                {dictionary.lastNameLabel}
                <span style={{ color: '#E26D5A' }}>*</span>
              </>
            }
            placeholder={dictionary.lastNamePlaceholder}
            typographyVariant="label"
            width="100%"
          />
        </RowTwo>

        <FullWidthItem>
          <InputWithIcon
            label={
              <>
                {dictionary.emailLabel}
                <span style={{ color: '#E26D5A' }}>*</span>
              </>
            }
            placeholder={dictionary.emailPlaceholder}
            typographyVariant="label"
            width="100%"
          />
        </FullWidthItem>

        <AmountSection>
          <div>
            <Typography variant="label">
              {dictionary.donation}
              <span style={{ color: '#E26D5A' }}>*</span>
            </Typography>
            <InputMoney
              placeholder="$"
              value={manualAmount}
              onChange={(val) => {
                setManualAmount(val);
                setSelectedAmount(null);
              }}
            />
          </div>

          <OrText>OR</OrText>

          <div>
            <Typography variant="label">
              {dictionary.selectAmount}
              <span style={{ color: '#E26D5A' }}>*</span>
            </Typography>
            <div onClick={() => setManualAmount(null)}>
              <SelectAmountWrapper
                selected={selectedAmount}
                onChange={(val) => {
                  setSelectedAmount(val);
                  setManualAmount(null);
                }}
              />
            </div>
          </div>
        </AmountSection>

        <Total amount={totalAmount} dictionary={dictionary} />
      </StyledContainer>
    </StyledSection>
  );
}
