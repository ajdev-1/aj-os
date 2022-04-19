import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { faClose, faMaximize, faMinimize } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './AppWindowContent.scss';

class AppWindowContent extends React.Component {

    render() {
        return(
            <Container>
                <Row xs={6} sm={6} md={6} lg={6}>
                    <Col><FontAwesomeIcon icon={faMinimize}/></Col>
                    <Col>Test column</Col>
                </Row>
                <Row xs={6} sm={6} md={6} lg={6}>
                    <Col><FontAwesomeIcon icon={faMinimize}/></Col>
                    <Col>Test column</Col>
                </Row>
            </Container>
        )
    }
}

export default AppWindowContent;