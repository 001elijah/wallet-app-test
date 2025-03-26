import React from 'react';
import { Box, Container } from '@mui/material';
import CardBalanceBlock from '../components/CardBalanceBlock';
import NoPaymentDueBlock from '../components/NoPaymentDueBlock';
import DailyPointsBlock from '../components/DailyPointsBlock';
import LatestTransactions from '../components/LatestTransactions';

export type UserParams = {
  name: string;
}

const TransactionsList: React.FC = () => {
  const currentBalance = Math.random() * 1500;
  const balanceData = {
    balance: currentBalance,
    limit: 1500
  }

  const loggedInUser: UserParams = { name: 'John'}
  return (
    <Container maxWidth="sm" sx={{ mt: 2 }}>
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ flex: 1, mr: 2 }}>
          <CardBalanceBlock balanceData={balanceData} />
          <DailyPointsBlock />
        </Box>
        <NoPaymentDueBlock />
      </Box>
      <Box>
        <LatestTransactions user={loggedInUser}/>
      </Box>
    </Container>
  );
};

export default TransactionsList;
