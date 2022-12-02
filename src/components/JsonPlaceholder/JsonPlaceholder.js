import React, { useReducer, useEffect } from 'react';
import { Container, Row, Col, Button, Alert } from 'react-bootstrap';
import { ACTIONS } from '../../actions/actions';
import { reducer, iState } from '../../reducers/JsonPlaceholderReducer';
import { getJSON } from '../../helpers/helperFns';
import { JSONPLACEHOLDER_API_URL } from '../../helpers/config';
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';
import './JsonPlaceholder.scss';

const JsonPlaceholder = () => {
  const [state, dispatch] = useReducer(reducer, iState);
  const { isLoading, data, isError, pram } = state;

  useEffect(() => {
    (async () => {
      try {
        dispatch({ type: ACTIONS.FETCH_START });
        const data = await getJSON(`${JSONPLACEHOLDER_API_URL}/${pram}`);
        dispatch({ type: ACTIONS.FETCH_SUCCESS, payload: [...data] });
      } catch (err) {
        dispatch({ type: ACTIONS.FETCH_ERROR, payload: err });
      }
    })();
  }, [pram]);

  const handlePram = (e) => {
    return dispatch({ type: ACTIONS.UPDATE_PRAM, payload: e.target.name });
  };

  return (
    <section className="jsonplaceholder__page">
      <Container>
        <Row>
          <Col md={12}>
            <Button variant="dark" onClick={handlePram} name="posts">
              posts
            </Button>
            <Button variant="dark" onClick={handlePram} name="comments">
              comments
            </Button>
            <Button variant="dark" onClick={handlePram} name="albums">
              albums
            </Button>
            <Button variant="dark" onClick={handlePram} name="photos">
              photos
            </Button>
            <Button variant="dark" onClick={handlePram} name="todos">
              todos
            </Button>
            <Button variant="dark" onClick={handlePram} name="users">
              users
            </Button>
          </Col>
          <Col md={12}>
            <div className="content">
              {isLoading ? (
                <LoadingSpinner />
              ) : isError ? (
                <Alert key="danger" variant="danger">
                  This is a 'danger' alert—check it out!
                </Alert>
              ) : (
                <>
                  <h1 className="text-center text-uppercase">{pram}</h1>
                  <p>{JSON.stringify(data)}</p>
                </>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export { JsonPlaceholder };
