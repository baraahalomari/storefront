import { connect } from 'react-redux';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';




const useStyles = makeStyles((theme) => ({

    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },

}));



function Cart(props) {
    const classes = useStyles();
    function handleCart() {
        let temp = [];

        props.cart.map((element) => {

            if (temp.includes(element)) {
                temp.forEach(item => {
                    if (item.name === element.name) {
                        item.inCart += 1;
                    }
                })

            } else {
                element.inCart = 1;
                temp.push(element)
            }

        })

        let list = temp.map(element => {
            return (<ListItem button>
                <ListItemText primary={`${element.name} : ${element.inCart}`} />
            </ListItem>)
        })
        return list;

    }


    return (
        <div className={classes.root}>
            <List component="nav" aria-label="secondary mailbox folders">
                {handleCart()}
            </List>
        </div>
    )

}

function mapStateToProps(state) {
    return state;
}


export default connect(mapStateToProps)(Cart);


