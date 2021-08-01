import React from 'react';
import '../HStylies/Projects.modules.css';
import { Container } from '@material-ui/core';
import ProjectContent from '../HComponents/ProjectContent';
import project1 from '../../../Assets/Extra-img/project-1.png';
import project2 from '../../../Assets/Extra-img/project-2.png';
import project3 from '../../../Assets/Extra-img/project-3.png';
import project4 from '../../../Assets/Extra-img/project-4.png';
import project5 from '../../../Assets/Extra-img/project-5.png';
import project6 from '../../../Assets/Extra-img/project-6.png';
import project7 from '../../../Assets/Extra-img/project-7.png';
import project8 from '../../../Assets/Extra-img/project-8.png';


const Projects = () => {
    const projects = [
        { _id: 1, title: "Ema-john", date: 'Released: 05-01-2020', image: project1 },
        { _id: 2, title: "Desh-tourism", date: 'Released: 05-03-2020', image: project2 },
        { _id: 3, title: "Child-care", date: 'Released: 05-06-2020', image: project3 },
        { _id: 4, title: "Rajshopnil", date: 'Released: 05-09-2020', image: project4 },
        { _id: 5, title: "Vanila-books", date: 'Released: 05-12-2020', image: project5 },
        { _id: 6, title: "Consultations", date: 'Released: 05-03-2021', image: project6 },
        { _id: 7, title: "Ema-john", date: 'Released: 05-06-2021', image: project7 },
        { _id: 8, title: "Vanila-books", date: 'Comming soon...', image: project8 },
    ];

    return (
        <section>
            <Container>
                <div className="projects-header">
                    <h1>My project sample</h1>
                    <p>Projects and work sample section. You can also like that? Please follow the link on my projects</p>
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