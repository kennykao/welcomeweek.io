import React from "react";
import Gallery from "react-photo-gallery";
import img from "./campus_ireland-wagner_staff.jpg";

const EventsGallery = () => {
	const photos = [
		{
			src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
			width: 2,
			height: 1,
		},
		{
			src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
			width: 2,
			height: 1,
		},
		{
			src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
			width: 2,
			height: 1,
		},
		{
			src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
			width: 2,
			height: 1,
		},
		{
			src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
			width: 2,
			height: 1,
		},
		{
			src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
			width: 2,
			height: 1,
		},
	];

	return <Gallery photos={photos} />;
};

export default EventsGallery;
