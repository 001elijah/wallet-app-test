import React from 'react';
import { Typography } from '@mui/material';
import CustomCard from './CustomCard.tsx';

type CardBalanceBlockProps = {
  balanceData: {
    balance: number;
    limit: number;
  }
};

const CardBalanceBlock: React.FC<CardBalanceBlockProps> = ({ balanceData }) => {
  const { balance, limit } = balanceData;
  const available = limit - balance;

  return (
    <CustomCard sx={{ p: 1 }}>
      <Typography variant="subtitle1" color="text.primary">
        Card Balance
      </Typography>
      <Typography variant="h5" fontWeight="bold">
        ${balance.toFixed(2)}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        ${available.toFixed(2)} Available
      </Typography>
    </CustomCard>
  );
};

export default CardBalanceBlock;
