import React ,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { changeActive } from '../store/categories';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { getRemoteData } from '../async-fun/thunk';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});



function Categories(props) {

    const dispatch = useDispatch();
    const state = useSelector(state => state.categories);




    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(()=>{
        dispatch(getRemoteData()).then(()=>{
            dispatch(changeActive("electronics"));
        });
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
                 {state.categories.map((element)=>{
                return <Tab key={element.name} label={element.name} onClick={() => {dispatch(changeActive(element.name)) }} />
            })}
            </Tabs>
            <h2>{state.activeCategory.name}</h2>
            <p>{state.activeCategory.description}</p>
        </Paper>
    );
}



export default Categories; 






