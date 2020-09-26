import React, { useContext } from "react";
import { faSearch, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dropdown, Nav, Navbar } from "react-bootstrap";
import { FirebaseContext } from "../utils/firebase";
import { Link, useHistory, useLocation } from "react-router-dom";

export const TopBar = ({isDoctor}) => {
    const firebase = useContext(FirebaseContext);
    const history = useHistory();
    
    const onSignOut = () => {
        firebase.auth
          .signOut()
          .then(() => {
            history.push("/login");
          });
      }
    
    return (
        <>
          <Navbar bg="info">
            <Navbar.Brand href="/">Project Awesome</Navbar.Brand>

            { isDoctor && <Link to="/patients" className="ml-auto">
                <FontAwesomeIcon  icon={faSearch} size="lg"/>    
            </Link> }
            
            <FontAwesomeIcon onClick={onSignOut} icon={faSignOutAlt} size="lg"/>
          </Navbar>
        </>
    )
}