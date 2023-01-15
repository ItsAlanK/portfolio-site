import {Col} from 'react-bootstrap';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const ProjectCard = ({title, category, tagline, description, imgUrl}) => {
    function MyVerticallyCenteredModal(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                {title}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>{category}</h4>
              <p>
                {description}
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }

    const [modalShow, setModalShow] = useState(false);

    return (
        <Col sm={6} md={4}>
            <div className="project-img-box" onClick={() => setModalShow(true)}>
                <img src={imgUrl} />
                <div className="project-text">
                    <h4>{title}</h4>
                    <span>{category}</span>
                    <p>{tagline}</p>
                </div>
            </div>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </Col>
    )
}