import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  search: {
    display: 'flex',
    borderRadius: theme.shape.borderRadius,
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.05),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      minHeight: '64px',
    },
  },
  searchIcon: {
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '97%',
    height: '100%',
    position: 'absolute',
  },
  inputInput: {
    paddingLeft: `calc(1em + ${theme.spacing(1)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    fontSize: '1.8rem',
  },
}));

export default function Searchbar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{'backgroundColor':'rgb(253 209 194)','boxShadow': '0px 2px 4px -1px rgb(0 0 0 / 5%), 0px 4px 5px 0px rgb(0 0 0 / 0%), 0px 1px 10px 0px rgb(0 0 0 / 5%)'}}color="brown">
        <Toolbar>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon style={{'height': '1.3em','width': '1.3em'}}/>
            </div>
            <InputBase
              placeholder="Search By Title…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e)=>props.setSearchedData(e.target.value)}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
