import React, { useState } from 'react';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import NoteList from '../components/NoteList';
import NoteEditor from '../components/NoteEditor';

const NotesPage = () => {
  const [items, setItems] = useState([]);
  const [activeItemId, setActiveItem] = useState(null);
  const [currentId, setCurrentId] = useState(1);

  const createNewNote = () => {
    const id = currentId;
    setItems([{ id, title: 'New Note', description: ''}, ...items]);
    setActiveItem(id);
    setCurrentId(currentId + 1)
  };

  const chooseNote = (id) => {
    setActiveItem(id);
  }

  const onSave = (itemId, obj) => {
    setItems(items.map(note => note.id === itemId ? obj : note));
  }

  const onDelete = (itemId) => {
    setItems(items.filter(({ id }) => itemId !== id));
    setActiveItem(null);
  }

  return (
    <Container>
      <Row>
        <Col xs={4}>
          <NoteList
            items={items}
            createNewNote={createNewNote}
            chooseNote={chooseNote}
            activeItemId={activeItemId}
          />
        </Col>
        <Col xs={8}>
          <NoteEditor 
            item={items.find(({ id }) => id === activeItemId) || {}}
            onSave={onSave}
            onDelete={onDelete}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default NotesPage;