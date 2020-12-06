import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Link from "next/link";

const SideBar = ({ classes, open, handleDrawerClose, theme }) => {
  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <List>
        {["Top Headlines"].map((text, index) => (
          <ListItem button key={text}>
            {text === "Top Headlines" && (
              <Link
                href="/topHeadlines/[country]/[country]/[page]"
                as={`/topHeadlines/in/All/${parseInt(1)}`}
              >
                <a>
                  <ListItemText primary={text} />
                </a>
              </Link>
            )}
          </ListItem>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
};

export default SideBar;
