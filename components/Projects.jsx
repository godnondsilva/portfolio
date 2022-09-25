import {
	ProjectsCardContainer,
	ProjectsContainer,
	Title,
} from '../styles/Projects.styles';
import { projects } from '../data/projects.js';
import ProjectCard from './ProjectCard';
import { Fade } from 'react-awesome-reveal';

const Projects = () => {
	return (
		<ProjectsContainer id='projects'>
			<Fade triggerOnce direction='up'>
				<Title>/ projects</Title>
			</Fade>
			<ProjectsCardContainer>
				<Fade triggerOnce direction='up' cascade damping={0.1}>
					{projects.map((project) => {
						return <ProjectCard key={project.id} project={project} />;
					})}
				</Fade>
			</ProjectsCardContainer>
		</ProjectsContainer>
	);
};

export default Projects;
