import React from 'react';
import {
    Button, Modal, ModalBody, ModalFooter
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import './InstructionOneToFifty.scss';

export class InstructionOneToFifty extends React.Component {
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
        < div>
            {/* INSTRUCTIONS */}
                <span className="bigInstructions" style={{ color: "rgb(245, 123, 75)", fontSize: "2em"}} onClick={this.toggle}>{instructions}</span>
                <Modal isOpen={this.state.modal} toggle={this.toggle} style={{ marginTop:"10%"}}>
                    <ModalBody>
                        <div><p>¡Intenta contar de uno a cincuenta lo más rapido posible! ¿Eres más rápido que tus amigos?</p></div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Cerrar</Button>
                    </ModalFooter>
                </Modal>
        </div>
    )}
}

export default InstructionOneToFifty;