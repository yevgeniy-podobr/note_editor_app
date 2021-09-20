import React from 'react';
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'


const NoteList = ({
  items = [],
  createNewNote,
  chooseNote,
  activeItemId,
}) => (
  <Container>
    <ListGroup>
      <Button
        className="mb-2"
        variant="outline-primary"
        onClick={createNewNote}
      >
        + New
      </Button>
      { !!items.length 
        && items.map(({ title, id }) => (
          <ListGroup.Item
            action
            className="mb-2"
            key={id}
            active={activeItemId === id}
            onClick={() => chooseNote(id)}
          >
            {title}
          </ListGroup.Item>))}
    </ListGroup>
  </Container>
);

export default NoteList;