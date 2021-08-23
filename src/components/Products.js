import React from 'react'
import { connect } from 'react-redux';
import { getCategoryItems } from '../store/products';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

function Products(props) {
    const classes = useStyles();
    return (
        <div>
            {props.activeProducts.map(element=>{
            return <Card className={classes.root} style={{ margin:"auto" , width:"60%", marginLeft:"20px",position:"absolute"}}>
                  <CardMedia
                    className={classes.media}
                    image={element.image}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {element.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                       {element.description}
                    </Typography>
                </CardContent>
            </Card>

            })}
        </div>
    )
}
function mapStateToProps(state) {
    return state.products;
}
const mapDispatchToProps = {
    getCategoryItems,
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)