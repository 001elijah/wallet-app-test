import React from 'react';
import { Card, CardProps } from '@mui/material';

type CustomCardProps = CardProps & {
  children: React.ReactNode;
};

const CustomCard: React.FC<CustomCardProps> = ({ children, sx, ...props }) => {
  return (
    <Card
      sx={{
        p: 1,
        mb: 2,
        borderRadius: 3,
        boxShadow: 'none',
        ...sx,
      }}
      {...props}
    >
      {children}
    </Card>
  );
};

export default CustomCard;
