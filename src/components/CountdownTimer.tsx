'use client';

import { useEffect, useState } from 'react';

interface CountdownTimerProps {
  targetDate: Date;
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
      {['Days', 'Hours', 'Minutes', 'Seconds'].map((label, index) => (
        <div key={label} className="bg-gray-100 p-4 rounded text-center">
          <p className="text-2xl font-bold">{Object.values(timeLeft)[index]}</p>
          <p>{label}</p>
        </div>
      ))}
    </div>
  );
}