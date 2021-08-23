import React ,{useEffect} from 'react'
import { connect } from 'react-redux';
import { changeActive } from '../store/categories';
import { getCategoryItems } from '../store/products';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});



function Categories(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(()=>{
        props.changeActive("electronics");
    },[])

    return (
        <Paper className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                {props.categories.map((element)=>{
                return <Tab key={element.name} label={element.name} onClick={() => { props.changeActive(element.name) }} />
            })}
            </Tabs>
            <h2>{props.activeCategory.name}</h2>
            <p>{props.activeCategory.description}</p>
        </Paper>
    );
}


const mapStateToProps = (state) => {
    return state.categories;
}
const mapDispatchToProps = {
    changeActive,
    getCategoryItems
}


export default connect(mapStateToProps, mapDispatchToProps)(Categories);






