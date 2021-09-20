import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { BiTrash } from 'react-icons/bi';

const NoteEditor = ({ item: { id, title, description }, onSave, onDelete }) => {
  const [activeTitle, setTitle] = useState('');
  const [activeDescription, setDescription] = useState('');

  useEffect(() => {
    setTitle(title || '');
    setDescription(description || '');

    return () => {};
  }, [title, description])

  const clearState = () => {
    setTitle('');
    setDescription('');
  }

  const onSubmit = () => {
    onSave(id, {
      title: activeTitle,
      description: activeDescription,
      id,
    });
    clearState();
  }

  const handleDelete = () => {
    onDelete(id);
    clearState();
  }


  return (
    <Container>
      <Row className="align-items-end">
        <Col sm={10} >Title</Col>
        <Col sm={2}>
          <Button disabled={!id} onClick={handleDelete}> 
            <BiTrash />
          </Button>
        </Col>
      </Row>
      <Form>
        <Form.Group className="my-3" controlId="title">
          <Form.Control
            type="text"
            placeholder="Add title"
            disabled={!id}
            value={activeTitle}
            onChange={el => setTitle(el.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Add descriptions ..."
            rows={7}
            disabled={!id}
            value={activeDescription}
            onChange={el => setDescription(el.target.value)}
          />
        </Form.Group>
        <Button
          variant="outline-primary"
          className="center"
          disabled={!id}
          onClick={onSubmit}
        >
          Save
        </Button>
      </Form>
    </Container>
  );
};

export default NoteEditor;