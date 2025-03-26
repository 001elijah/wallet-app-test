import React, { useMemo } from 'react';
import { Typography } from '@mui/material';
import CustomCard from './CustomCard.tsx'

const calculateDailyPoints = (dayOfSeason: number): string => {
  if (dayOfSeason < 1) throw new Error("Invalid day of season.");
  if (dayOfSeason === 1) return "2";
  if (dayOfSeason === 2) return "3";

  let prevPrevPoints = 2;
  let prevPoints = 3;
  let currentPoints = 0;

  for (let day = 3; day <= dayOfSeason; day++) {
    currentPoints = Math.round(prevPrevPoints + prevPoints * 0.6);
    prevPrevPoints = prevPoints;
    prevPoints = currentPoints;
  }

  return currentPoints > 1000
    ? `${Math.floor(currentPoints / 1000)}K`
    : currentPoints.toString();
};

const getSeasonStart = (date: Date): Date => {
  const year = date.getFullYear();
  const month = date.getMonth();

  let seasonStartMonth: number;

  if (month >= 2 && month <= 4) {
    seasonStartMonth = 2;
  } else if (month >= 5 && month <= 7) {
    seasonStartMonth = 5;
  } else if (month >= 8 && month <= 10) {
    seasonStartMonth = 8;
  } else {
    seasonStartMonth = 11;
    if (month <= 1) {
      return new Date(year - 1, seasonStartMonth, 1);
    }
  }

  return new Date(year, seasonStartMonth, 1);
};

const DailyPointsBlock: React.FC = () => {
  const today = new Date();
  const seasonStart = getSeasonStart(today);
  const dayOfSeason = Math.ceil((today.getTime() - seasonStart.getTime()) / (1000 * 60 * 60 * 24)) + 1;
  const dailyPoints = useMemo(() => calculateDailyPoints(dayOfSeason), [dayOfSeason]);

  return (
    <CustomCard>
      <Typography variant="subtitle1" color="text.primary">Daily Points</Typography>
      <Typography variant="subtitle1" color="text.secondary">
        {dailyPoints}
      </Typography>
    </CustomCard>
  );
};

export default DailyPointsBlock;
