import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import lifeChronicles from './assets/images/lifeChronicles.png';
import Posts from './components/Posts/Posts';
import Form from './components/Forms/Form';
import useStyles from './styles';

const App = () => {

    const classes = useStyles();

    return (
        <Container maxWidth='lg'>
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Typography className={classes.heading} variant='h2' align='center'>Life Chronicles</Typography>
                <img className={classes.image} src={lifeChronicles} alt='Life Chronicles' height="60"/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent='space-between' alignItems='center' spacing={4}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
};

export default App;