/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
import colors from 'tailwindcss/colors';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        auto: 'repeat(auto-fill, minmax(55px, 1fr))'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-6deg)' },
          '50%': { transform: 'rotate(6deg)' }
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' }
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite'
      }
    },
    fontFamily: {
      rocket: ['RocketFont', ...defaultTheme.fontFamily.sans],
      sans: ['Inconsolata', ...defaultTheme.fontFamily.sans],
      gantari: ['Gantari', ...defaultTheme.fontFamily.sans],
      borel: ['Borel', ...defaultTheme.fontFamily.sans]
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      neutral: colors.neutral,
      night: {
        DEFAULT: '#111010',
        100: '#030303',
        200: '#060606',
        300: '#090909',
        400: '#0d0c0c',
        500: '#111010',
        600: '#413d3d',
        700: '#736c6c',
        800: '#a29c9c',
        900: '#d0cece'
      },
      reseda_green: {
        DEFAULT: '#5b7553',
        100: '#121711',
        200: '#242f21',
        300: '#364632',
        400: '#485d42',
        500: '#5b7553',
        600: '#77986d',
        700: '#99b292',
        800: '#bbcbb6',
        900: '#dde5db'
      },
      cambridge_blue: {
        DEFAULT: '#8eb897',
        100: '#19281c',
        200: '#325039',
        300: '#4b7855',
        400: '#669f72',
        500: '#8eb897',
        600: '#a5c6ac',
        700: '#bbd5c1',
        800: '#d2e3d5',
        900: '#e8f1ea'
      },
      tea_green: {
        DEFAULT: '#c3e8bd',
        100: '#1b3f16',
        200: '#377d2c',
        300: '#52bc42',
        400: '#8bd280',
        500: '#c3e8bd',
        600: '#d0edcc',
        700: '#dcf1d9',
        800: '#e8f6e5',
        900: '#f3faf2'
      },
      celadon: {
        DEFAULT: '#9ddbad',
        100: '#14371d',
        200: '#296e3a',
        300: '#3da557',
        400: '#67c77f',
        500: '#9ddbad',
        600: '#b2e2be',
        700: '#c5eace',
        800: '#d8f1de',
        900: '#ecf8ef'
      }
    }
  },
  darkMode: 'class',
  plugins: [require('@tailwindcss/typography')]
};
