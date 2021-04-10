import React from 'react'
import Link from '@material-ui/core/Link'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem'
import MenuIcon from '@material-ui/icons/Menu';
import GitHubIcon from '@material-ui/icons/GitHub'
import IconButton from '@material-ui/core/IconButton';
import { useStyles } from '../styles/theming';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';



const NavBar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null)
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  
  const handleClose = () => {
    setAnchorEl(null);
  }
  
  return (
    <div className={classes.root}>
      <AppBar position="static" >
        <Toolbar>
          
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" aria-controls="nav-menu" onClick={handleClick} >
            <MenuIcon />
          </IconButton>
          
          <Typography variant="h6" className={classes.title}>
            PicMe
          </Typography>
          <IconButton href="https://github.com/JulianAR97/picme-client" target="_blank">
            <GitHubIcon />
          </IconButton>
          
          <Menu
            id="nav-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <Link aria-current="page" href="/play" style={{color: 'inherit', textDecoration: 'none'}}>play</Link>   
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link aria-current="page" href="/" style={{color: 'inherit', textDecoration: 'none'}}>myCollection</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link aria-current="page" href="/hottest" style={{color: 'inherit', textDecoration: 'none'}}>hottest</Link>   
            </MenuItem>

            

          </Menu>

        </Toolbar>
      </AppBar>
      <br />

    </div>
   
    
  )
}

export default NavBar
