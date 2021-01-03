import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import { default as chakraTheme } from '../assets/themes';

export default withStyles(theme => ({
  root: {
    width: 59,
    height: 39,
    padding: 0
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(23px)',
      '& + $track': {
        backgroundColor: chakraTheme.colors.orange,
        opacity: 1,
        border: 'none'
      }
    }
  },
  thumb: {
    width: 30,
    height: 30,
    marginTop: 3,
    marginLeft: 2,
    color: theme.palette.common.white
  },
  track: {
    borderRadius: 39 / 2,
    backgroundColor: chakraTheme.colors.lightGray,
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
