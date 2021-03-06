import React from 'react'
import { AppBar, Typography, Toolbar, Avatar, Button} from "@material-ui/core"
import useStyle from './styles';
import { Link } from 'react-router-dom'
import memories from '../../images/memories.png'
const Navbar = () => {
    const classes = useStyle()
    const user = null
    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={ Link } to='/' className={classes.heading} variant="h2"/>
            
            <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
            <img className={classes.image} src={memories} alt="icon" height="60" />
            </div>
            <Toolbar className={classes.toolbar}>
                {user?(
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} src={user.result.imageUrl} >{user.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>

                        <Button component ={Link} to="/logout" variant="contained" color="primary">Sign out</Button>
                    </div>
                ) : (
                    <Button component={Link} to="/auth" variant="contained" color="primary">Sign in</Button>
                )
                }
            </Toolbar>
        </AppBar>
       
    )
}

export default Navbar