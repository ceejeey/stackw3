import { autocompleteClasses } from '@mui/material';
import { display, minWidth, textTransform } from '@mui/system';
import { style } from '@vanilla-extract/css';

export const Container = style({
  '@media': {
    'screen and (min-width: 768px)': {
      height: 210,
      width: 467,
      padding: 40
    }
  },
  height: 200,
  width: '85%',
  padding: 30,
  borderRadius: '20px',
  backgroundColor: '#141414',
  margin: '20px 10px',
  transition: 'all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s',

  ':hover': {
    transform: 'scale(1.03)!important',
    color: '#fff'
  }
});

export const HeaderContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  fontSize: '20px',
  fontWeight: '700'
});

export const HeaderWrap = style({
  '@media': {
    'screen and (min-width: 768px)': {
      width: '70%'
    }
  },
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  width: '68%',
  margin: 'auto'
});

export const Title = style({
  fontSize: '20px',
  fontWeight: '700',
  textTransform: 'capitalize'
});

export const IconContainer = style({
  justifyContent: 'flex-end',
  width: '32%',
  alignSelf: 'center',
  cursor: 'pointer'
});

export const IconWrap = style({
  display: 'flex',
  justifyContent: 'center',
  fontSize: '10px'
});

export const Iconbackground = style({
  '@media': {
    'screen and (min-width: 768px)': {
      height: 40,
      width: 40
    }
  },
  height: 30,
  width: 30,
  borderRadius: '50%',
  margin: 'auto',
  backgroundColor: '#262626',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '16px',
  color: '#b3b1b1',
  transition: 'all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s',
  ':hover': {
    transform: 'scale(1.06)',
    color: '#fff'
  }
});

export const IconSandBox = style({
  height: '20px',
  width: '20px'
});

export const Para = style({
  '@media': {
    'screen and (min-width: 768px)': {
      height: 210,
      width: 482
    }
  },
  whiteSpace: 'normal',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  marginTop: '20px',
  maxWidth: '402px',
  minWidth: '300px',
  maxHeight: 60,
  minHeight: 40,
  fontSize: '12px',
  color: '#A3A3A3',
  lineHeight: '21.78px',
  letterSpacing: '.5px'
});

export const Action = style({
  margin: '5px',
  marginTop: '20px',
  display: 'flex'
});

export const Tags = style({
  display: 'flex',
  width: '70%',
  flexWrap: 'wrap'
});

export const Tag = style({
  '@media': {
    'screen and (min-width: 768px)': {
      maxWidth: '6rem',
      padding: '2px 8px',
      fontSize: '10px'
    }
  },
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '3px',

  maxWidth: '4rem',
  height: '20px',
  border: '0.5px solid #505050',
  borderRadius: '20px',
  padding: '1px 4px',
  textAlign: 'center',
  backgroundColor: '#363638',
  color: '#FFFFFF',
  fontSize: '7.3px',
  fontWeight: '100',
  cursor: 'pointer'
});

export const ButtonsContainer = style({
  display: 'flex',
  width: '30%',
  justifyContent: 'flex-end'
});

export const button = style({
  '@media': {
    'screen and (min-width: 768px)': {
      width: '116px',
      height: '43px',
      fontSize: '12px'
    }
  },
  width: '90px',
  height: '35px',
  borderRadius: '8.78px',
  padding: '10px',
  textAlign: 'center',
  backgroundColor: '#262626',
  fontSize: 10,
  border: 'none',
  color: '#FFFFFF',
  fontWeight: '400',
  cursor: 'pointer'
});

export const ModalErrorHeaderContainer = style({
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '20px',
  fontWeight: '700',
  color: 'red'
});

export const loadingContainer = style({
  display: 'flex',
  padding: '100px',
  justifyContent: 'center',
  marginTop: '10%'
});
