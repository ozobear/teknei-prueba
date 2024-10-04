"use client";

import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { USERNAME } from '../utils/constants';

const Footer = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <footer>
      <p>
        {format(date, 'dd/MM/yyyy HH:mm:ss')}
      </p>
      <p>Participante: [{USERNAME}]</p>
    </footer>
  );
};

export default Footer;