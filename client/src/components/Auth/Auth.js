import React,{useState} from 'react';
import { Avatar, Container, Grid, Paper, Typography, Button } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import useStyles from './styles';
import Input from './Input';
import { GoogleLogin } from 'react-google-login';
import Icon from './icon';
const Auth = () => {
    const classes = useStyles();
    const [isSignup, setSignup] = useState(false);
    const [showPassword, setShowPassword] = useState(null);
    const handleSubmit = () => {

    }
    const handleChange = () => {

    }
    const switchMode = () => {
        setSignup((prevIsSignup) => !prevIsSignup)
        handleShowPassword(false);
    }
    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);
    const googleSuccess = async (res) => {
        console.log(res);
        const result = res?.profileObj; // Cannot get Profile
        const token = res?.tokenId;
        
    };
    const googleFailure = () => {
        console.log( "Google Sign in was unscuccessful. Try Again!")
    }
    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation ="30" >
                <Avatar className={classes.avatar}>
                    <LockOutlined />
                </Avatar>
                <Typography variant="h5">{isSignup? "Sign Up": "Sign in"}</Typography>
                <form className={classes.form} onSubmit = {handleSubmit}>
                    <Grid container spacing ={2}>
                        {
                            isSignup && (
                                <> 
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                </>
                            )
                        }
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />

                        {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password"/>}
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {isSignup?"Sign up" : "Sign in"}
                    </Button>
                    <GoogleLogin
                        clientId="922578083709-knarsep7kgfra0aup2slpg3pq9dtm48o.apps.googleusercontent.com"
                        render={(renderProps) => (
                        <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                            Google Sign In
                        </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                    />
                   
                    <Grid container justify="flex-end">
                        <Button onClick={switchMode}>
                            {isSignup ? "Already have an account? Sign In": "Don't have an account? Sign Up"}
                        </Button>
                    </Grid>
                </form>
            </Paper>

        </Container>
    )
}

export default Auth;