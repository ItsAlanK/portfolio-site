import { Container, Row, Col, Nav, Tab  } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import projImg1 from "../assets/img/project-img-1.png";
import projImg2 from "../assets/img/project-img-2.png";
import projImg3 from "../assets/img/project-img-3.png";
import projImg4 from "../assets/img/project-img-4.png";
import projImg5 from "../assets/img/project-img-5.png";
import projImg6 from "../assets/img/project-img-6.jpeg";

export const Projects = () => {

    const projects = [
        {
            title: "APR Breathwork",
            category: "Web",
            tagline: "Full Stack Ecommerce Site",
            description: "APR Breathwork is an ecommerce site designed to be used in the future by my partner, Aoife, who is a breathwork coach. She provides 1 to 1 and group breathwork classes both as 1 offs and 6 week courses. So she was in need of a website where she can both advertise and sell these courses and classes.",
            imgUrl: projImg1,
            link: 'https://github.com/ItsAlanK/apr-breathwork',
        },
        {
            title: "Gold Splits",
            category: "Web",
            tagline: "Django based user submission site",
            description: "Gold Splits is a platform for speedrunners of various games to gather together to discuss various topics. Post your new personal best times, start a discussion about strategies or create a guide on a route.",
            imgUrl: projImg2,
            link: 'https://github.com/ItsAlanK/gold-splits',
        },
        {
            title: "Portfolio Tracker",
            category: "Web",
            tagline: "Python application",
            description: "The portfolio tracker is a tool created as a way for investors of stock and crypto to easily monitor their investments and plot changes to a spreadsheet.",
            imgUrl: projImg3,
            link: 'https://github.com/ItsAlanK/portfolio-tracker',
        },
        {
            title: "Trivial Gauntlet",
            category: "Web",
            tagline: "Javascript Quiz Game",
            description: "Tackle a gauntlet of trivia questions and see how far you can get with limited strikes in this multiple choice quiz. This game uses the Open Trivia Database API to generate a gauntlet of questions to challenge the users' knowledge on various subjects.",
            imgUrl: projImg4,
            link: 'https://github.com/ItsAlanK/trivial-gauntlet',
        },
        {
            title: "Explore Hyrule",
            category: "Web",
            tagline: "Static HTML Site",
            description: "Explore Hyrule is a website created to promote The Legend of Zelda: Breath of the Wild video game for the Nintendo Switch. The website is aimed at displaying the features of the game and to inform users about some of the lore and gameplay they can expect from the product.",
            imgUrl: projImg5,
            link: 'https://github.com/ItsAlanK/explore-hyrule',
        },
        {
            title: "Sketches",
            category: "Creative",
            tagline: "Architecture Sketches",
            description: "I've started drawing local buildings that I find interesting or unique and post them to Instagram for the moment. I plan to collect them and host them elsewhere too and potentially sell prints.",
            imgUrl: projImg6,
            link: 'https://www.instagram.com/p/CmOtnkGKnwn/',
        },
        {
            title: "We Share We Grow",
            category: "Creative",
            tagline: "Podcast Producer",
            description: "I edit and produce my partner Aoife's Health and Wellness Podcast 'We Share, We Grow'",
            imgUrl: "https://wesharewegrow.buzzsprout.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCQk9VMVFNPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--bb868bbad9266ffe846b08aa670114a63dff0155/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2QzNKbGMybDZaVWtpRFRZd01IZzJNREJlQmpzR1ZEb01aM0poZG1sMGVVa2lDMk5sYm5SbGNnWTdCbFE2QzJWNGRHVnVkRWtpRERZd01IZzJNREFHT3daVU9neHhkV0ZzYVhSNWFWVTZEMk52Ykc5eWMzQmhZMlZKSWdselVrZENCanNHVkE9PSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--8a9b4b1bc245a46b538f72d4d9b2ab0a7fbe8ac1/podcast%20pic.jpg",
            link: 'https://wesharewegrow.buzzsprout.com/',
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