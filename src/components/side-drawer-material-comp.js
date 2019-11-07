import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Scroll from "react-scroll";

import treatmentsIcon from "../pic/icons/treatments-icon.png";
import contactsIcon from "../pic/icons/contactsIcon.png";
import therapists from "../pic/icons/therapistsBlack.png";
import walletIcon from "../pic/icons/wallet-icon.png";
import groupIcon from "../pic/icons/group-icon-black.png";
import mail from "../pic/icons/mail.png";

import hu from "../assets/languages/lang-hu.json";
import en from "../assets/languages/lang-en.json";

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
});

export default function SideDrawer(props) { 
  const scroller = Scroll.scroller;
  const icons = [
    treatmentsIcon,
    groupIcon,
    therapists,
    walletIcon,
    contactsIcon,
    mail
  ];
  let navbar = "HU";
  let email = "HU";
  props.language === "HU" ? (navbar = hu.navbar) : (navbar = en.navbar);
  props.language === "HU"
    ? (email = hu.footer.email)
    : (email = en.footer.email);
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });

  const link = element => {
    scroller.scrollTo(element, {
      delay: 100,
      duration: 300,
      smooth: "easeInOutExpo",
      offset: 0
    });
  };
  const toggleDrawer = (side, open) => event => {
    setTimeout(()=> {
      props.closeSideBar();
    },100 )
    
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {Object.entries(navbar).map((element, index) => {
          return element[0] !== "contactUs" ? (
            <ListItem
              button
              key={"text"}
              onClick={() => {
                link(`${element[0]}`);
              }}
            >
              <ListItemText primary={element[1]} />
              <ListItemIcon>
                <img src={icons[index]} id="drawer-icons"/>
              </ListItemIcon>
            </ListItem>
          ) : (
            <ListItem
              button
              key={"text"}
              onClick={e => {
                e.stopPropagation();
                props.openModal();
              }}
            >
              <ListItemText primary={element[1]} />
              <ListItemIcon style={{ pointerEvents: "none" }}>
                <img src={icons[index]} id="drawer-icons"/>
              </ListItemIcon>
            </ListItem>
          );
        })}
      </List>
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer("left", true)}>Open Left</Button>
      <Drawer open={props.sideBar} onClose={toggleDrawer("left", false)}>
        {sideList("left")}
        <Divider />
      </Drawer>
    </div>
  );
}
