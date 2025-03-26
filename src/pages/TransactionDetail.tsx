import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Button, Typography, Container, Box, Divider } from '@mui/material'
import transactionsData from '../data/transactions.json';
import CustomCard from '../components/CustomCard.tsx';

const TransactionDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const transaction = transactionsData.find((tx) => tx.id === id);

  if (!transaction) {
    return (
      <Container maxWidth="sm" sx={{ mt: 2, textAlign: 'center' }}>
        <Typography variant="h6">Transaction Not Found</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 7, textAlign: 'center' }}>
      <Button onClick={() => navigate(-1)} sx={{ position: 'absolute', top: 16, left: 16 }}>
        <ArrowBackIosNewIcon />
      </Button>
      <Typography variant="h3" fontWeight="bold">
        <FontAwesomeIcon icon={faDollarSign} />
        {transaction.amount.toFixed(2)}
      </Typography>

      <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 0.5 }}>
        {transaction.transactionName}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 3 }}>
        {new Date(transaction.date).toLocaleString()}
      </Typography>

      <CustomCard sx={{ p: 2 }}>
        <Box sx={{ textAlign: 'left' }}>
          <Typography variant="body2" fontWeight="bold">Status: Approved</Typography>
          <Typography variant="body2" color="text.secondary">
            {transaction.description}
          </Typography>
          <Divider component="div" sx={{ mt: 2, mb: 2 }}/>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Typography variant="body2" fontWeight="bold">Total</Typography>
            <Typography variant="body2" fontWeight="bold">
              <FontAwesomeIcon icon={faDollarSign} />
              {transaction.amount.toFixed(2)}
            </Typography>
          </Box>
        </Box>
      </CustomCard>
    </Container>
  );
};

export default TransactionDetail;
