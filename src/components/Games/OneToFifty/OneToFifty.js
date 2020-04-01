import React, { useState } from 'react';
import './OneToFifty.scss';
import {
    Button,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Modal, ModalBody, ModalFooter
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

export default function OneToFifty() {
    //Instructions Icon
    const instructions = <FontAwesomeIcon icon={faQuestionCircle} />
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    // ---STATES---
    // let [numbersList, changenumbersList] = useState([]);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => setDropdownOpen(prevState => !prevState);
    const [numberCells, changeNumberCells] = useState(12);
    let [seconds, changeSeconds] = useState(0);
    // ---END OF STATES---

    //Counter time
    setTimeout(() => {
        changeSeconds(seconds + 1);
    }, 1000);

    //Grid size for diferents levels
    let cell = [];
    for (let i = 0; i < numberCells; i++) {
        cell.push(<div className="col-3" key={i}><div className="cellNumber alignCenter justifyCenter">hola</div></div>)
    }

    return (
        <div className="OneToFifty container-fluid">
            {/* INSTRUCTIONS */}
            <div className="row">
                <span style={{ color: "#283f67", fontSize: "2em", marginLeft: "90%" }} onClick={toggle}>{instructions}</span>
                <Modal isOpen={modal} toggle={toggle} style={{ marginTop:"10%"}}>
                    <ModalBody>
                        <p>Cuenta del 1 al 50 lo más rápido posible...</p>
                        <p>¡Consigue tu tiempo récord!</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={toggle}>Cerrar</Button>
                    </ModalFooter>
                </Modal>
            </div>
            {/* MENU */}
            <div className="row timeAndActualNumber alignCenter">
                <div className="col-12 col-md-6">
                    <div className="row justifyCenter">
                        <p>Tiempo: {seconds}</p>
                    </div>
                    <div className="row justifyCenter">
                        <p>Numero actual: X</p>
                    </div>
                </div>
                <div className="col-12 col-md-6 justifyCenter">
                    <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                        <DropdownToggle caret className="selector_button button" >
                            Selecciona nivel
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={() => changeNumberCells(4)}>Aprende</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem onClick={() => changeNumberCells(8)}>Fácil</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem onClick={() => changeNumberCells(12)}>Medio</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem onClick={() => changeNumberCells(16)}>Difícil</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>
            {/* GAME */}
            <div className="row numbersGrid">
                {cell}
            </div>
            <Button className="button" onClick={() => window.location.reload()}>Restart</Button>
        </div>
    )
}