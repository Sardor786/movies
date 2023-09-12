import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import "@splidejs/react-splide/css";

const defaultImages = new Array(10).fill({
	path: "https://picsum.photos/500/250?random=",
});

export default function Slider({ items = defaultImages }) {
	return (
		<div className="slider">
			<h3>Gallery ({items.length})</h3>
			<Splide
				options={{
					keyboard: true,
					pagination: false,
					arrows: true,
					focus: "left",
					perPage: 2.5,
					gap: 10,
					height: 250,
					breakpoints: {
						500: {
							perPage: 1.5,
							height: 150,
						},
					},
				}}
			>
				{items.map((item, i) => {
					return (
						<SplideSlide key={i} className="slider_item">
							<img src={item.path + i} alt="" />
						</SplideSlide>
					);
				})}
			</Splide>
		</div>
	);
}
