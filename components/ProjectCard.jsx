import { FaExternalLinkAlt, FaGithub, FaInbox } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { ProjectIcon, SocialIcon } from '../styles/Icon.styles';
import {
	Anchor,
	CardContainer,
	Description,
	LinkContainer,
	LinkSection,
	Tags,
	Title,
} from '../styles/ProjectCard.styles';

const ProjectCard = ({ project }) => {
	const { title, description, tags, github, visit } = project;
	return (
		<CardContainer>
			<LinkContainer>
				<LinkSection>
					<ProjectIcon as={FaInbox} />
				</LinkSection>
				<LinkSection>
					{github.length ? (
						<Anchor href={github} target='_blank' rel='noreferrer'>
							<SocialIcon as={FaGithub} />
						</Anchor>
					) : null}
					{visit.length ? (
						<Anchor href={visit} target='_blank' rel='noreferrer'>
							<SocialIcon as={FaExternalLinkAlt} />
						</Anchor>
					) : null}
				</LinkSection>
			</LinkContainer>
			<Title>{title}</Title>
			<Description>{description}</Description>
			<Tags>{tags}</Tags>
		</CardContainer>
	);
};

export default ProjectCard;
