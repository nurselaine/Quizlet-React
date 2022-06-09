import React from 'react';
import Lists from './Lists';
import { Nav, Navbar } from 'react-bootstrap';

const Footer = (props) => {

    let subjects = ['Arts and Humanities', 'Languages', 'Math', 'Science', 'Social Sciences', 'Other'];
    let features = ['Quizlet live', 'Quizlet Checkpoint', 'Quizlet Learn', 'Explanations', 'Flashcards', 'Mobile', 'Upgrades', 'Partnerships'];
    let help = ['Help Center', 'Honor Code', 'Commmunity Guidelines', 'Teachers'];
    let about = ['Company', 'Learning Lab', 'Blog', 'Press', 'Careers', 'Advertise', 'Privacy'];
    let Language = ['English (USA)'];

    return (
        <div>
            <Navbar fixed="bottom">
                <Nav fill variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/home" items={subjects}>Subjects</Nav.Link>
                        <Lists items={subjects}/>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Features</Nav.Link>
                        <Lists items={features}/>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Help</Nav.Link>
                        <Lists items={help}/>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-3">About</Nav.Link>
                        <Lists items={about}/>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-3">Languages</Nav.Link>
                        <Lists items={Language}/>
                    </Nav.Item>
                </Nav>
            </Navbar>
        </div>

    );
};

export default Footer;
