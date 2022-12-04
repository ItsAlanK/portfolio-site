import { Container, Row, Col  } from 'react-bootstrap';

export const About = () => {
    return (
        <section class='about' id='about'>
            <Container class="about-box">
                <Row className="flex">
                    <Col sm={12} md={10} lg={8} className="text-center about-col">
                        <h1 className="title">About</h1>
                        <p>
                            Hey, my name is Alan. Thanks for stopping by. This is where I'm going to put a little bit of an intro about myself and what I do.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}