import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton } from './HeroStyles';

const Hero = () => {
	return (
		<HeroSection>
			<HeroVideo src="./assets/hero.mp4" autoPlay replay muted />
			<Container>
				<MainHeading>LIFE, HEALTH, <br/>& WEALTH</MainHeading>
				<HeroText>
					We provide the best Life Insurance and Retirement Carriers to clients all over the US
				</HeroText>
				<ButtonWrapper>
					<Link to="signup">
						<Button>Get Started</Button>
					</Link>
					<HeroButton>Find More</HeroButton>
				</ButtonWrapper>
			</Container>
		</HeroSection>
	);
};

export default Hero;
