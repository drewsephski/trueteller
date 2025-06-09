import React from 'react';
import {
  GiBeaver, GiDeerHead, GiWolfHead, GiOwl, GiButterfly, GiPanda,
  GiFoxHead, GiPawPrint, GiDolphin, GiRaven, GiLion,
  GiElephant, GiEagleHead
} from 'react-icons/gi';
import { FaCat, FaHorse } from 'react-icons/fa';

const emojiIconMap = {
  '🦫': <GiBeaver />,
  '🦌': <GiDeerHead />,
  '🐺': <GiWolfHead />,
  '🦉': <GiOwl />,
  '🐈': <FaCat />,
  '🦋': <GiButterfly />,
  '🐼': <GiPanda />,
  '🦊': <GiFoxHead />,
  '🐆': <GiPawPrint />,
  '🦦': <GiPawPrint />,
  '🐬': <GiDolphin />,
  '🐦‍⬛': <GiRaven />,
  '🦁': <GiLion />,
  '🐘': <GiElephant />,
  '🐎': <FaHorse />,
  '🦅': <GiEagleHead />,
};

const IconMapper = ({ emoji }) => {
  return emojiIconMap[emoji] || null;
};

export default IconMapper; 