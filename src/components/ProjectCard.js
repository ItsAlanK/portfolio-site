import {Col} from 'react-bootstrap';

export const ProjectCard = ({title, category, description, imgUrl}) => {
    return (
        <Col sm={6} md={4}>
            <div className="project-img-box">
                <img src={imgUrl} />
                <div className="project-text">
                    <h4>{title}</h4>
                    <span>{category}</span>
                    <p>{description}</p>
                </div>
            </div>
        </Col>
    )
}