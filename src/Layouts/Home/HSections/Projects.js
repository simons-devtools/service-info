import React from 'react';
import '../HStylies/Projects.modules.css';
import { Container } from '@material-ui/core';
import ProjectContent from '../HComponents/ProjectContent';
import project1 from '../../../Assets/Home-images/project-1.png';
import project2 from '../../../Assets/Home-images/project-2.png';
import project3 from '../../../Assets/Home-images/project-3.png';
import project4 from '../../../Assets/Home-images/project-4.png';
import project5 from '../../../Assets/Home-images/project-5.png';
import project6 from '../../../Assets/Home-images/project-6.png';


const Projects = () => {
    const projects = [
        { "_id": 1, "title": "Ema-john", "image": project1 },
        { "_id": 1, "title": "Desh-tourism", "image": project2 },
        { "_id": 1, "title": "Child-care", "image": project3 },
        { "_id": 1, "title": "Rajshopnil", "image": project4 },
        { "_id": 1, "title": "Vanila-books", "image": project5 },
        { "_id": 1, "title": "Consultations", "image": project6 },
        { "_id": 1, "title": "Ema-john", "image": project1 },
        { "_id": 1, "title": "Vanila-books", "image": project5 },
    ];

    return (
        <section>
            <Container>
                <div className="projects-header">
                    <h1>Our projects sample</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, libero.</p>
                </div>
                <div className="projects-content">
                    {
                        projects.map(project => <ProjectContent
                            key={project._id}
                            project={project}
                        />)
                    }
                </div>
            </Container>
        </section>
    );
};

export default Projects;