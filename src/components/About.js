import { Container, Row, Col  } from 'react-bootstrap';

export const About = () => {
    return (
        <section class='about' id='about'>
            <Container class="about-box">
                <Row className="flex">
                    <Col sm={12} md={10} lg={8} className="text-center about-col">
                        <h1 className="title">About</h1>
                        <p>
                            Hey, my name's Alan. I'm currently a Support Advisor for Shopify as well as a software dev and generally creative person. I have a Bsc Hons in Multimedia from Dublin City University which gave me experience and knowledge in all areas of media creation. I've also studied Digital Marketing and Data Analytics. And most recently I've finished my Professional Diploma in Full Stack Software Development from Code Institute.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}