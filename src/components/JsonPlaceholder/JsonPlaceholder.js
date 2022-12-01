import React, { useReducer, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ACTIONS } from '../../actions/actions';
import { reducer, iState } from '../../reducers/JsonPlaceholderReducer';
import { getJson } from '../../helpers/helperFns';
import './JsonPlaceholder.scss';

const JsonPlaceholder = () => {
  const [state, dispatch] = useReducer(reducer, iState);
  const { pram } = state;
  console.log(pram);

  useEffect(() => {
    (async () => {})();
  }, [pram]);

  return (
    <section className="jsonplaceholder__page">
      <Container>
        <Row>
          <Col md={12}>
            <Button variant="dark" name="posts">
              posts
            </Button>
            <Button variant="dark" name="comments">
              comments
            </Button>
            <Button variant="dark" name="albums">
              albums
            </Button>
            <Button variant="dark" name="photos">
              photos
            </Button>
            <Button variant="dark" name="todos">
              todos
            </Button>
            <Button variant="dark" name="users">
              users
            </Button>
          </Col>
          <Col md={12}>
            <div className="content">{state.data}</div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export { JsonPlaceholder };
