import { Container, Row, Col, Nav, Tab  } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import projImg1 from "../assets/img/project-img-1.png";

export const Projects = () => {

    const projects = [
        {
            title: "Title 1",
            category: "Web",
            tagline: "Tagline",
            description: "Proj desc",
            imgUrl: projImg1,
        },
        {
            title: "Title 2",
            category: "Web",
            tagline: "Tagline",
            description: "Proj desc",
            imgUrl: projImg1,
        },
        {
            title: "Title 3",
            category: "Creative",
            tagline: "Tagline",
            description: "Proj desc",
            imgUrl: projImg1,
        },
        {
            title: "Title 4",
            category: "Creative",
            tagline: "Tagline",
            description: "Proj desc",
            imgUrl: projImg1,
        },
    ];

    return (
        <section class='projects' id='projects'>
            <Container>
                <Row className="flex">
                    <Col sm={12} md={10} lg={10} className="text-center">
                        <h2 className="title">Projects</h2>
                        <Tab.Container id="projects-tabs" defaultActiveKey="tab1">
                            <Nav variant="pills" defaultActiveKey="/home">
                                <Nav.Item>
                                    <Nav.Link eventKey="tab1">All</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="tab2">Web</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="tab3">Creative</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="tab1">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard key={index}{...project} />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="tab2">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                if (project.category === 'Web') {
                                                    return (
                                                        <ProjectCard key={index}{...project} />
                                                    )
                                                }
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="tab3">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                if (project.category === 'Creative') {
                                                    return (
                                                        <ProjectCard key={index}{...project} />
                                                    )
                                                }
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}