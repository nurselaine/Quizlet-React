import React from 'react';
import { Nav } from 'react-bootstrap';

const Lists = ({items}) => {

  return (
    <div>
      <Nav defaultActiveKey="/home" className="flex-column">
        {
          items.map((subject) => {
            return (
              <Nav.Link eventKey="link-1">{subject}</Nav.Link>
            )
          })
        }
    </Nav>
    </div>
  );
}

export default Lists;