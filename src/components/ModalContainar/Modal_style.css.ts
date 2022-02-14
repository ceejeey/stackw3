import { style } from '@vanilla-extract/css';

export const ModalContainer = style({
  '@media': {
    'screen and (min-width: 768px)': {
      width: '603px',
      margin: 'calc((100vh - 450px)/2) auto'
    }
  },

  width: '90%',
  margin: 'calc((100vh - 450px)/2) auto',
  position: 'absolute',
  left: 0,
  right: 0,
  background: '#151515',
  backdropFilter: 'blur( 4px )',
  border: '1px solid #242424',
  borderRadius: '5px'
});

export const ModalHeaderContainer = style({
  height: '70px',
  display: 'flex',
  alignItems: 'center',
  borderBottom: '1px solid #242424',
  padding: '0px 30px'
});

export const header = style({
  fontSize: '18px',
  fontWeight: '300',
  lineHeight: '19px',
  color: '#EDEDED',
  textTransform: 'capitalize'
});
export const SuccessContainer = style({
  height: 'calc(122px - 40px)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px 40px',
  background: 'linear-gradient(90deg, rgba(215, 15, 15, 0.2816) 13.02%, rgba(21, 21, 21, 0) 100%)'
});

export const SuccessContainerDisabled = style({
  display: 'none'
});

export const CheckCircleIcon = style({
  color: '#D70F0F',
  height: '32px',
  float: 'left',
  width: '20%',
  display: 'flex',
  justifyContent: 'center'
});

export const HeaderContainer = style({
  display: 'flex',
  height: '75%',
  width: '70%',
  flexDirection: 'column',
  justifyContent: 'space-between'
});

export const title = style({
  '@media': {
    'screen and (min-width: 768px)': {
      fontSize: 16
    }
  },
  fontSize: 14,
  fontWeight: 700,
  color: '#D70F0F'
});

export const Successmesaggewrapper = style({
  '@media': {
    'screen and (min-width: 768px)': {
      width: 370,
      fontSize: 12,
      height: 32
    }
  },

  width: '90%',
  height: 26,
  fontSize: 8,
  fontWeight: 300,
  color: '#ccc'
});
export const ModalTextContainer = style({
  '@media': {
    'screen and (min-width: 768px)': {
      width: '538px'
    }
  },
  width: '90%',
  display: 'flex',
  justifyContent: 'space-evenly',
  flexDirection: 'column',
  position: 'relative',
  margin: '40px auto'
});

export const input = style({
  '@media': {
    'screen and (min-width: 768px)': {
      height: '30px'
    }
  },
  height: '30px',
  padding: '10px',
  background: '#222222',
  border: 'none',
  fontSize: '14px',
  fontWeight: '500',
  borderRadius: '10px',
  color: '#fff',

  ':focus': {
    outline: 'none',
    backgroundColor: 'none',
    color: '#fff'
  }
});

export const OptionContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '145px',
  marginTop: '25px'
});

export const VisibilityContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  height: '40px',
  padding: '12px',
  background: '#060606',
  borderRadius: '10px',
  alignItems: 'center',
  cursor: 'pointer'
});

export const VisibilityWrapper = style({
  '@media': {
    'screen and (min-width: 768px)': {
      fontSize: '13px'
    }
  },
  display: 'flex',
  flexDirection: 'column',
  color: '#EDEDED',
  fontSize: '11px',
  cursor: 'pointer'
});

export const Description = style({
  '@media': {
    'screen and (min-width: 768px)': {
      fontSize: '13px'
    }
  },
  fontSize: '11px',
  fontWeight: '300',
  color: '#444444',
  marginTop: '2px',
  cursor: 'pointer'
});

export const ModalinputContainer = style({
  display: 'flex',
  justifyContent: 'flex-end',
  width: '100%',
  marginTop: '25px'
});

export const ButtonContainer = style({
  '@media': {
    'screen and (min-width: 768px)': {
      width: '140px',
      height: '45px',
      padding: '10px',
      fontSize: '12px',
      fontWeight: '400'
    }
  },
  width: '100px',
  height: '40px',
  borderRadius: '8.65px',
  textAlign: 'center',
  fontSize: '10px',
  border: 'none',
  fontWeight: '300',
  transition: '0.5s ease-in all',
  cursor: 'pointer'
});

export const ButtonDisabled = style({
  ':disabled': {
    backgroundColor: '#262626',
    color: '#fff'
  }
});

export const LoadingContainer = style({
  width: '100%',
  height: '100%'
});

export const Tooltip = style({
  position: 'absolute',
  top: 7,
  right: 2,
  height: '40px'
});

export const Grey = style({
  color: '#D2d4da'
});