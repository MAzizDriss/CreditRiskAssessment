import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom';
export const getTheme = muiBaseTheme => ({
  MuiButton: {
    root: {
      
      "&.MuiButton--gradient": {
        minWidth: 200,
        transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
        borderRadius: 50,
        marginLeft:50,
        background:
          "linear-gradient(to right, #FFC371, #FF5F6D)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
        /*"&:hover": {
          transform: "scale(1.1)"
        }*/
      }
    },
    label: {
      color: muiBaseTheme.palette.common.white,
      textTransform: "none",
      fontSize: 15,
      fontWeight: 700
    },
    contained: {
      minHeight: 30,
      boxShadow: muiBaseTheme.shadows[0],
      "&$focusVisible": {
        boxShadow: muiBaseTheme.shadows[0]
      },
      "&:active": {
        boxShadow: muiBaseTheme.shadows[0]
      },
      "&$disabled": {
        boxShadow: muiBaseTheme.shadows[0]
      }
    }
  }
});

const GradientButton = ({text,lien}) => (
  <React.Fragment>
      <Link to={lien} style={{textDecoration:'none'}} >
      <Button  className={"MuiButton--gradient"}>{text}</Button>
       </Link>
   
  </React.Fragment>
);

GradientButton.getTheme = getTheme;
GradientButton.displayName = "Button";
GradientButton.metadata = {
  name: "Gradient",
  description: "Welcome to the new trend"
};

export default GradientButton;