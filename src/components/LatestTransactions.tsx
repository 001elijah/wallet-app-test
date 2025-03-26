import React from 'react';
import { Typography, Box, Avatar, ListItem, List, ListItemAvatar, ListItemText, Divider } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import transactionsData from '../data/transactions.json';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { grey } from '@mui/material/colors'
import { UserParams } from '../pages/TransactionsList.tsx'

interface LatestTransactionsProps {
  user: UserParams;
}

const LatestTransactions: React.FC<LatestTransactionsProps> = ({ user }) => {
  const transactionsToDisplay = transactionsData.slice(0, 10);
  const navigate = useNavigate();
  const formatDate = (dateStr: string): string => {
    const date = new Date(dateStr);
    const now = new Date();

    const dayDiff = (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24);

    return dayDiff < 7 ? date.toLocaleDateString('en-US', { weekday: 'long' }) : date.toLocaleDateString();
  };

  const getRandomDarkColor = (): string => {
    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.floor(Math.random() * 30) + 50;
    const lightness = Math.floor(Math.random() * 20) + 10;
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  };

  const handleItemClick = (id: string) => {
    navigate(`/detail/${id}`);
  };

  return (
    <>
      <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>
        Latest Transactions
      </Typography>
      <List sx={{ width: '100%', maxHeight: '550px', overflowY: 'auto', bgcolor: 'background.paper', borderRadius: 3 }}>
        {transactionsToDisplay.map((tx, index) => (
          <React.Fragment key={tx.id}>
            <ListItem alignItems="flex-start" onClick={() => handleItemClick(tx.id)}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: getRandomDarkColor(), borderRadius: 2, mr: 2, width: 56, height: 56 }}>
                  <FontAwesomeIcon icon={tx.type === 'Payment' ? faCreditCard : faShoppingCart} color="#fff" size="lg" />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {tx.transactionName}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {tx.type === "Payment" && "+"}${tx.amount}
                      </Typography>
                      <ArrowForwardIosIcon sx={{ ml: 1, color: grey[400] }} fontSize="small" />
                    </Box>
                  </Box>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="subtitle1"
                    >
                      {tx.isPending && "Pending"} {tx.description ? tx.description : ''}
                    </Typography>
                    <Typography component="span" variant="subtitle1">{` ${tx.name !== user.name ? tx.name : ''} ${formatDate(tx.date)}`}</Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            {transactionsToDisplay.length - 1 !== index && <Divider variant="inset" sx={{ marginLeft: 2 }} component="li" />}
          </React.Fragment>
        ))}
      </List>
    </>
  );
};

export default LatestTransactions;
