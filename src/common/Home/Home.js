import React from "react";
import styled from "styled-components";
import Countdown from "react-countdown";
import img from "./campus_ireland-wagner_staff.jpg";
import EventsBackground from "./EventsBackground";
import EventsGallery from "./EventsGallery";

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
	height: 377px;
	margin: auto;
	text-align: center;
`;

const GetConnectedDiv = styled.div`
	position: relative;
	height: 70px;
	text-align: center;
	margin-left: 250px;
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
`;

const CountDownStyle = styled.span`
	color: white;
	font-family: Roboto;
	font-style: normal;
	font-weight: bold;
	font-size: 26px;
	line-height: 84px;
`;
const renderer = ({ days, hours, minutes, seconds }) => {
	return (
		<CountDownStyle>
			{days}d {hours}h {minutes}m {seconds}s
		</CountDownStyle>
	);
};

const MainContentWrapper = styled.div``;

const MidSectionWrapper = styled.div`
	text-align: center;
	margin: 150px 250px 0 250px;
	display: flex;
	flex-direction: row;
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
function Home() {
	return (
		<React.Fragment>
			<HomeDiv>
				<StyledWelcome>
					Welcome to Cal!
					<br></br>
					Welcome Week
				</StyledWelcome>
				<Countdown date={"2020-08-20T00:00:00"} renderer={renderer} />
			</HomeDiv>
			<MainContentWrapper>
				<MidSectionWrapper>
					<SplashDiv>
						<PlaceHolderSplash>input splash here</PlaceHolderSplash>
						<SplashBackground></SplashBackground>
					</SplashDiv>
					<GetConnectedDiv>
						<GetConnectedText>Want to get connected?</GetConnectedText>
						<div>
							Welcome to Cal! Getting plugged in can be difficult, especially as
							things are going virtual.
						</div>
					</GetConnectedDiv>
				</MidSectionWrapper>
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
