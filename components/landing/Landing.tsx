import { FaCaretDown } from 'react-icons/fa';
import {
	LandingContainer,
	Title,
	Subtitle,
	Description,
	Flex,
	BottomCaret,
	Anchor,
	Mobile,
	BackgroundContainer,
} from './Landing.styles';

import { CaretIcon } from '../../styles/Icon.styles';
import Button from '../button/Button';
import { Link as SmoothScroll } from 'react-scroll';
import { Fade } from 'react-awesome-reveal';
import { socials } from '../../data/socials';
import { ButtonType } from '../../types/enum';

const Landing = () => {
	return (
		<BackgroundContainer>
			<LandingContainer id='home'>
				<Fade triggerOnce direction='up' cascade damping={0.2}>
					<Subtitle>
						Software Engineer | <Mobile>Open Source Ethusiast</Mobile>
					</Subtitle>
					<Title>Hi, I&rsquo;m Godnon Dsilva.</Title>
					<Description>
						I am a software engineer from India. I enjoy building everything
						from small business apps to interactive web apps.
					</Description>
					<Flex>
						<SmoothScroll href='/' to='contact' smooth={true}>
							<Button bType={ButtonType.Primary}>Say Hi</Button>
						</SmoothScroll>
						<Anchor href={socials.resume} target='_blank'>
							<Button bType={ButtonType.Secondary}>View Resume</Button>
						</Anchor>
					</Flex>
				</Fade>
				<BottomCaret>
					<Fade triggerOnce direction='up' delay={1000}>
						<SmoothScroll
							aria-label='Godnon Dsilva Learn More'
							href='/'
							to='about'
							smooth={true}
						>
							<CaretIcon as={FaCaretDown} />
						</SmoothScroll>
					</Fade>
				</BottomCaret>
			</LandingContainer>
		</BackgroundContainer>
	);
};

export default Landing;
