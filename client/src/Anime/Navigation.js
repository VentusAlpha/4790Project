import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "@material-ui/core";
import { CSSTransition } from "react-transition-group";

import { Authentication } from "../Authentication/Authentication";

const NavContent = () => {
  // This is how it gets the authentication info.
  const authContext = useContext(Authentication);

  useEffect(() => {}, [authContext.logout]);

  if (!authContext.auth)
    return (
      <Card id="loggedOut">
        <ul className="nav">
          <li>
            <Link to="/">
              <Button>Sign In</Button>
            </Link>
          </li>
          <li>
            <Link to="/SignUp">
              <Button>Sign Up</Button>
            </Link>
          </li>
        </ul>
      </Card>
    );
  if (authContext.auth)
    return (
      <Card id="loggedIn">
        <ul className="nav">
          <li>
            <Link to="/">
              <Button onClick={authContext.logout}>Log Out</Button>
            </Link>
          </li>
          <li>
            <Link to="/Search">
              <Button>See Anime</Button>
            </Link>
          </li>
          <li>
            <Link to="/SearchManga">
              <Button>
                See Manga
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/Favorites">
              <Button>Favorites</Button>
            </Link>
          </li>
        </ul>
      </Card>
    );
};

// This is pretty short and sweet. It makes sure that it renders based on whether or not the user is logged in.
const Navigation = () => {
  // This is how it gets the authentication info.
  const authContext = useContext(Authentication);

  return (
    <CSSTransition
      in={authContext.isAuthenticated}
      timeout={1000}
      classNames="slide"
    >
      <NavContent isAuth={authContext.isAuthenticated} />
    </CSSTransition>
  );
};
export default Navigation;
