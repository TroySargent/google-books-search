import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Router>
      <div>
            <Link to="/" style={{ textDecoration: 'none' }}>
            <Button renderAs="button">
              <span>Search</span>
            </Button>
            </Link>
            <Link to="/saved" style={{ textDecoration: 'none' }}>
            <Button renderAs="button">
              <span>Saved</span>
            </Button>
            </Link>

      </div>
       
      
 


        <Switch>
          <Route exact path="/">
            <Search/>
          </Route>
          <Route exact path="/saved">
            <Saved/>
          </Route>
        </Switch>

    </Router>
  );
}

