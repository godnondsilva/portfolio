import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import {
	NavContainer,
	NavItems,
	NavItem,
	Icons,
	Anchor,
} from '../styles/Navigation.styles';
import { SmallIcon } from '../styles/Icon.styles';
import { Link as SmoothScroll } from 'react-scroll';
import { Fade } from 'react-awesome-reveal';
import { socials } from '../data/socials';

const Navigation = () => {
	return (
		<NavContainer>
			<NavItems>
				<Fade triggerOnce direction='up' cascade damping={0.2}>
					<SmoothScroll to='home' smooth={true}>
						<NavItem>/home</NavItem>
					</SmoothScroll>
					<SmoothScroll to='about' smooth={true}>
						<NavItem>/about</NavItem>
					</SmoothScroll>
					<SmoothScroll to='projects' smooth={true}>
						<NavItem>/projects</NavItem>
					</SmoothScroll>
					<SmoothScroll to='contact' smooth={true}>
						<NavItem>/contact</NavItem>
					</SmoothScroll>
				</Fade>
			</NavItems>
			<Fade triggerOnce direction='up' delay={1000}>
				<Icons>
					<Anchor href={socials.mail}>
						<SmallIcon as={FaEnvelope} />
					</Anchor>
					<Anchor href={socials.github}>
						<SmallIcon as={FaGithub} />
					</Anchor>
					<Anchor href={socials.linkedin}>
						<SmallIcon as={FaLinkedin} />
					</Anchor>
				</Icons>
			</Fade>
		</NavContainer>
	);
};

export default Navigation;
