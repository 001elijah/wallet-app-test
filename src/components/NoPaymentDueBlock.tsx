import React from 'react';
import { Typography, Box } from '@mui/material';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import CustomCard from './CustomCard.tsx';
import { grey } from '@mui/material/colors'

const NoPaymentDueBlock: React.FC = () => {
  return (
    <CustomCard>
      <Box sx={{ p: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Box sx={{ mb: 2}}>
          <Typography variant="subtitle1" color="text.primary">
            No Payment Due
          </Typography>
          <Typography sx={{ maxWidth: '160px' }} variant="body2" color="text.secondary">
            You’ve paid your September balance.
          </Typography>
        </Box>
        <CheckCircleRoundedIcon sx={{ width: '75px', height: 'auto', marginLeft: 'auto', color: grey[300] }} />
      </Box>
    </CustomCard>
  );
};

export default NoPaymentDueBlock;
