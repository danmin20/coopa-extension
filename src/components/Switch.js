import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import { default as styledTheme } from '../assets/themes';

export default withStyles(theme => ({
  root: {
    width: '5.9rem',
    height: '3.9rem',
    padding: 0
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(1.7rem)',
      '& + $track': {
        backgroundColor: styledTheme.colors.cookieOrange,
        opacity: 1,
        border: 'none'
      }
    }
  },
  thumb: {
    width: '2.7rem',
    height: '2.7rem',
    marginTop: '0.47rem',
    marginLeft: '0.65rem',
    color: theme.palette.common.white
  },
  track: {
    borderRadius: '1.95rem',
    backgroundColor: styledTheme.colors.gray_3,
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border'])
  },
  checked: {},
  focusVisible: {}
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked
      }}
      {...props}
    />
  );
});
