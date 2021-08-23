import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';



const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.main
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

function DenseAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            storefront
          </Typography>
          <Button  color="inherit" onClick={()=>{props.show()}} style={{marginLeft:"900px"}} >CART({props.cart.length})</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}


function mapStateToProps(state){
  return {cart:state.cart};
}
export default connect(mapStateToProps)(DenseAppBar);

