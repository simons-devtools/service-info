import React from 'react';
import '../HStylies/Projects.modules.css';
import { Container } from '@material-ui/core';
import ProjectContent from '../HComponents/ProjectContent';
import project1 from '../../../Assets/Home-images/Projects/project-1.png';
import project2 from '../../../Assets/Home-images/Projects/project-2.png';
import project3 from '../../../Assets/Home-images/Projects/project-3.png';
import project4 from '../../../Assets/Home-images/Projects/project-4.png';
import project5 from '../../../Assets/Home-images/Projects/project-5.png';
import project6 from '../../../Assets/Home-images/Projects/project-6.png';
import project7 from '../../../Assets/Home-images/Projects/project-7.png';
import project8 from '../../../Assets/Home-images/Projects/project-8.png';


const Projects = () => {
    const projects = [
        { _id: 1, title: "Chain-Search", date: 'Released: 05-01-2020', image: project1 },
        { _id: 2, title: "Doctors-portal", date: 'Released: 05-03-2020', image: project2 },
        { _id: 3, title: "Volunteer-Team", date: 'Released: 05-06-2020', image: project3 },
        { _id: 4, title: "Desh-Tourism", date: 'Released: 05-09-2020', image: project4 },
        { _id: 5, title: "Hotel-X", date: 'Released: 05-12-2020', image: project5 },
        { _id: 6, title: "Ema-John", date: 'Released: 05-03-2021', image: project6 },
        { _id: 7, title: "Rajshopnil", date: 'Released: 05-06-2021', image: project7 },
        { _id: 8, title: "Child-Care", date: 'Comming soon...', image: project8 },
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