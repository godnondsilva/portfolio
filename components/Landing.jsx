import { FaCaretDown } from 'react-icons/fa';
import {
	LandingContainer,
	Title,
	Subtitle,
	Description,
	Flex,
	BottomCaret,
	Anchor,
} from '../styles/Landing.styles';

import { CaretIcon } from '../styles/Icon.styles';
import Button, { BUTTON_TYPES } from './Button';
import { Link as SmoothScroll } from 'react-scroll';
import { Fade } from 'react-awesome-reveal';
import { socials } from '../data/socials';

const Landing = () => {
	return (
		<LandingContainer id='home'>
			<Fade triggerOnce direction='up' cascade damping={0.2}>
				<Subtitle>FULL STACK DEVELOPER | OPEN SOURCE ENTHUSIAST</Subtitle>

				<Title>Hi, I&rsquo;m Godnon Dsilva.</Title>
				<Description>
					I am a fullstack developer from India. I enjoy building everything
					from small business apps to interactive web apps.
				</Description>
				<Flex>
					<SmoothScroll to='contact' smooth={true}>
						<Button btype={BUTTON_TYPES.PRIMARY}>Contact Me</Button>
					</SmoothScroll>
					<Anchor href={socials.resume} target='_blank'>
						<Button btype={BUTTON_TYPES.SECONDARY}>View Resume</Button>
					</Anchor>
				</Flex>
			</Fade>
			<BottomCaret>
				<Fade triggerOnce direction='up' delay={1000}>
					<SmoothScroll to='about' smooth={true}>
						<CaretIcon as={FaCaretDown} />
					</SmoothScroll>
				</Fade>
			</BottomCaret>
		</LandingContainer>
	);
};

export default Landing;
