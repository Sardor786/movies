import dynamic from "next/dynamic";
import React from "react";

const ReactPlayer = dynamic(import("react-player"), { ssr: false });

export default function Video(movie: any) {
	return (
		<>
			<h3 className="video-title">Movie</h3>
			<div className="video">
				<ReactPlayer
					width={"100%"}
					height={"auto"}
					url={
						movie.video ||
						"https://www.facebook.com/facebook/videos/10153231379946729/"
					}
					controls
				/>
			</div>
		</>
	);
}
