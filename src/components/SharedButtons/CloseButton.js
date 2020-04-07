import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import '../SharedButtons/CloseButton.scss';

class CloseButton extends React.Component {
   
  render(){
       //Button Icon
       const closeButton = < FontAwesomeIcon icon = {
           faTimesCircle
       }
       />

      return (
        < div className = "CloseButton" >
            {/* CLOSE BUTTON */}
            <Link to = "/games-section" ><span style={{color: "#00ECFD", fontSize: "2em"}}>{closeButton}</span></Link>
        </div>
    )}
}

export default CloseButton;
