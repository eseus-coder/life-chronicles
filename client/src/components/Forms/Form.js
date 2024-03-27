import React, {useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import * as postsActions from "../../redux/actions/postsAction";
import useStyles from './styles';

const Form = () => {

    const dispatch = useDispatch();
    const classes = useStyles();

    const [postsData, setPostsData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: '',
    });

    
    const postsSubmitHandler = async(e) => {
        e.preventDefault();
        dispatch(postsActions.createPosts(postsData));
    };

    const onTextFieldChangeHandler = (e) => {
        const { value, name } = e.target;
        let tempData = {
            ...postsData,
            [name]: value
        }
        
        setPostsData(tempData);
    };

    const onDoneHandler = (base64) => {
        let tempData = {
            ...postsData,
            selectedFile: base64
        }

        setPostsData(tempData);
    };

    const onClickClearHandler = () => {

    };

    return (
        <Paper className={classes.paper}>
            <form 
                autoComplete="off" 
                noValidate 
                className={`${classes.root} ${classes.form}`} 
                onSubmit={postsSubmitHandler}
            >
                <Typography variant="h6">Chronicle Patchwork</Typography>
                <TextField 
                    variant="outlined" 
                    name="creator" 
                    label="Creator" 
                    fullWidth
                    value={postsData.creator}
                    onChange={(e) => onTextFieldChangeHandler(e)}
                >
                </TextField>
                <TextField 
                    variant="outlined" 
                    name="title" 
                    label="Title" 
                    fullWidth
                    value={postsData.title}
                    onChange={(e) => onTextFieldChangeHandler(e)}
                ></TextField>
                <TextField 
                    variant="outlined" 
                    name="message" 
                    label="Message" 
                    fullWidth
                    value={postsData.message}
                    onChange={(e) => onTextFieldChangeHandler(e)}
                ></TextField>
                <TextField 
                    variant="outlined" 
                    name="tags" 
                    label="Tags" 
                    fullWidth
                    value={postsData.tags}
                    onChange={(e) => onTextFieldChangeHandler(e)}
                ></TextField>
                <div className={classes.fileInput}>
                    <FileBase 
                        type="file"
                        multiple={false}
                    onDone={({base64}) => onDoneHandler(base64)}
                    />
                </div>
                <Button 
                    className={classes.buttonSubmit} 
                    variant="contained" 
                    color="primary" 
                    size="large" 
                    type="submit" 
                    fullWidth
                >
                    Submit
                </Button>
                <Button 
                    variant="contained" 
                    color="secondary"  
                    size="small" 
                    fullWidth
                    onClick={onClickClearHandler}
                >
                    Discard
                </Button>
            </form>
        </Paper>
    );
};

export default Form;