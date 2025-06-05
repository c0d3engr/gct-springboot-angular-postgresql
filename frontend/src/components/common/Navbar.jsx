import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Account Management
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/accounts">
          Accounts
        </Button>
        <Button color="inherit" component={Link} to="/accounts/create">
          Create Account
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;