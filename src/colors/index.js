import red from './red';
import pink from './pink';
import purple from './purple';
import deepPurple from './deepPurple';
import indigo from './indigo';
import blue from './blue';
import lightBlue from './lightBlue';
import cyan from './cyan';
import teal from './teal';
import green from './green';
import lightGreen from './lightGreen';
import lime from './lime';
import yellow from './yellow';
import amber from './amber';
import orange from './orange';
import deepOrange from './deepOrange';
import brown from './brown';
import grey from './grey';
import blueGrey from './blueGrey';

const colors = {
  black: '#000',
  white: '#fff',
  red,
  pink,
  purple,
  deepPurple,
  indigo,
  blue,
  lightBlue,
  cyan,
  teal,
  green,
  lightGreen,
  lime,
  yellow,
  amber,
  orange,
  deepOrange,
  brown,
  grey,
  blueGrey,
};

export default colors;

const validateColorForm = (color) => {
  if (!/[a-z]-A?(5|[1-9]0)0$/.test(color)) {
    throw new Error(
      `${color} is not valid color form. Use a color formed like "hue-contrast". And check if contrast is 50 to 900`
    );
  }
};

export const getColor = (_color) => {
  if (_color === 'white') return colors.white;
  if (_color === 'black') return colors.black;

  validateColorForm(_color);

  let [hue, contrast] = _color.split('-');

  if (!colors[hue]) {
    console.error(`hue ${hue} is not in colors`);
    return;
  }

  return colors[hue][contrast];
};
