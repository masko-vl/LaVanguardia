import React from 'react';
import {
    Button, Modal, ModalBody, ModalFooter
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

export class InstructionGames extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        }
    }

    toggle = () => this.setState({
            modal: !this.state.modal
        })
    
   
  render(){
       //Instructions Icon
       const instructions = < FontAwesomeIcon icon = {
           faQuestionCircle
       }
       />

      return (
        < div className = "instructionGames container-fluid" >
            {/* INSTRUCTIONS */}
            <div className="row">
                <span style={{ color: "#283f67", fontSize: "2em", marginLeft: "90%" }} onClick={this.toggle}>{instructions}</span>
                <Modal isOpen={this.state.modal} toggle={this.toggle} style={{ marginTop:"10%"}}>
                    <ModalBody>
                        <div>{this.props.instructionText}</div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Cerrar</Button>
                    </ModalFooter>
                </Modal>
            </div>
        </div>
    )}
}

export default InstructionGames;

