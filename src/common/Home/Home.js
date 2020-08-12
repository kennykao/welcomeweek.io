import React from "react";
import styled from "styled-components";
import Button from '@material-ui/core/Button'
import img from "./campus_ireland-wagner_staff.jpg";
import EventsBackground from "./EventsBackground";
import DOMPurify from "dompurify";

const StyledWelcome = styled.h1`
	position: relative;
	top: 40px;
	font-family: Roboto;
	font-style: normal;
	font-weight: bold;
	font-size: 62px;
	line-height: 84px;
	color: white;
`;

const HomeDiv = styled.div`
	position: relative;
	bottom: 19px;
	background-image: url(${img});
	width: 100%;
	height: 407px;
	margin: auto;
	text-align: center;
`;

const GetConnectedDiv = styled.div`
	position: relative;
	height: 70px;
	text-align: center;
	margin-left: 50px;
`;

const GetConnectedText = styled.h1`
	font-family: Roboto;
	font-style: normal;
	font-weight: bold;
	font-size: 39px;
	line-height: 46px;
	text-align: center;
	position: relative;
`;

const SplashDiv = styled.div`
	position: relative;
	bottom: 270px;
`;

const SplashBackground = styled.div`
	margin-left: 100px;
	background: #ffbf69;
	display: block;
	width: 345px;
	height: 220px;
	padding: 10px;
`;

const PlaceHolderSplash = styled.div`
	top: 200px;
	position: relative;
	left: 80px;
	width: 345px;
	height: 220px;
	background: yellow;
`;

const EventsBackgroundContainer = styled.div`
	width: 500px;
	height: 50px;
	bottom: 360px;
	position: relative;
`;
const EventsBackgroundImageContainer = styled.div`
	position: absolute;
	z-index: -999;
	flex-shrink: 0;
`;

const MainContentWrapper = styled.div`
	flex: 1 0 auto;
`;

const MidSectionWrapper = styled.div`
	// text-align: center;
	margin: 150px 0px -100px 0px;
	// display: flex;
	// flex-direction: row;
	display: grid;
	grid-auto-flow: column;
	grid-auto-columns: 10% 40% 40% 10%;
	position: relative;
	text-align: center;
`;

const SecondMidSectionWrapper = styled.div`
	// text-align: center;
	margin: 0px 0px 100px 0px;
	// display: flex;
	// flex-direction: row;
	display: grid;
	grid-auto-flow: column;
	grid-auto-columns: 10% 40% 40% 10%;
	position: relative;
	text-align: center;
`;

const EventsGalleryWrapper = styled.div`
	display: flex;
	flex-flow: row wrap;
	box-sizing: border-box;
	width: 100vw;
	margin: auto;
	font-size: 0;
	padding-top: 150px;
	justify-content: center;
`;

const PlaceHolderDiv = styled.div`
	background: #ffbf69;
	display: block;
	width: 345px;
	height: 220px;
	margin: 10px;
`;
const countDownTimer =
	'<div class="powr-countdown-timer" id="fd09fa71_1596262539"></div><script src="https://www.powr.io/powr.js?platform=react"></script>';
function Home() {
	return (
		<React.Fragment>
			<HomeDiv>
				<StyledWelcome>
					Welcome to Cal!
					<br></br>
					Welcome Week
				</StyledWelcome>
				<div
					className="content"
					dangerouslySetInnerHTML={{
						__html: DOMPurify.sanitize(countDownTimer),
					}}
				></div>
			</HomeDiv>
			<MainContentWrapper>
				<MidSectionWrapper>
					<div></div>
					<SplashDiv>
						<PlaceHolderSplash>input nswn splash here</PlaceHolderSplash>
						<SplashBackground></SplashBackground>

					</SplashDiv>
					<GetConnectedDiv>
						<GetConnectedText>Want to get connected?</GetConnectedText>
						<div>
							Welcome to Cal! Getting plugged in can be difficult, especially as
							things are going virtual. If you want to get plugged in, fill out this form below!
						</div>
					</GetConnectedDiv>
				</MidSectionWrapper>
				<SecondMidSectionWrapper>
					<div></div>
					<SplashDiv>
						<PlaceHolderSplash>input sws splash here</PlaceHolderSplash>
						<SplashBackground></SplashBackground>
					</SplashDiv>
					<GetConnectedDiv>
						<GetConnectedText>Sunday Worship Service</GetConnectedText>
						<div>
						Come join us virtually for service. 8/16 at 1:15 PM.
						</div>
						<Button variant="contained" color="primary">Click Here!</Button>
					</GetConnectedDiv>
				</SecondMidSectionWrapper>
				<EventsBackgroundContainer>
					<EventsBackgroundImageContainer>
						<EventsBackground />
					</EventsBackgroundImageContainer>
					<EventsGalleryWrapper>
						<PlaceHolderDiv></PlaceHolderDiv>
						<PlaceHolderDiv></PlaceHolderDiv>
						<PlaceHolderDiv></PlaceHolderDiv>
						<PlaceHolderDiv></PlaceHolderDiv>
						<PlaceHolderDiv></PlaceHolderDiv>
						<PlaceHolderDiv></PlaceHolderDiv>
						<PlaceHolderDiv></PlaceHolderDiv>
						<PlaceHolderDiv></PlaceHolderDiv>
					</EventsGalleryWrapper>
				</EventsBackgroundContainer>
			</MainContentWrapper>
		</React.Fragment>
	);
}
export default Home;
