import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import { default as styledTheme } from '../assets/themes';

export default withStyles(theme => ({
  root: {
    width: 59,
    height: 39,
    padding: 0
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(20px)',
      '& + $track': {
        backgroundColor: styledTheme.colors.cookieOrange,
        opacity: 1,
        border: 'none'
      }
    }
  },
  thumb: {
    width: 27,
    height: 27,
    marginTop: 5,
    marginLeft: 5,
    color: theme.palette.common.white
  },
  track: {
    borderRadius: 39 / 2,
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
