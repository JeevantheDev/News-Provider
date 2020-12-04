import React, { useState } from "react";
import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = ({ classes, open, handleDrawerOpen }) => {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const handleRouteChange = (e) => {
    if (e.key === "Enter") {
      router.push(`/everyNews/${query}`);
    }
  };
  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h4" noWrap>
            <Link href="/">
              <a className="text-decoration-none">News Provider</a>
            </Link>
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              onKeyUp={handleRouteChange}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
