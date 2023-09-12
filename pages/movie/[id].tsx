import React from "react";
import { Col, Rate, Row, Space, Tag } from "antd";

import mainCallerApi from "/pages/api";
import { MovieItemTypes } from "/pages/types";
import time from "/helpers/time";
import BackButton from "./components/BackButton";
import People from "./components/People";
import Gallery from "./components/Gallery";
import Video from "./components/Video";

export default function MoviePage(movie: MovieItemTypes) {
	return (
		<div>
			<div className="header">
				<BackButton />
				<h1 className="movie-title">{movie.title}</h1>
			</div>

			<Row className="content" gutter={[32, 32]}>
				{/* POSTER */}
				<Col span={6} xl={6} md={6} sm={24} xs={24}>
					<div>
						<img
							src={movie.poster}
							alt={movie.title_en}
							width={"100%"}
						/>
					</div>
				</Col>

				{/* TITLE DESCRIPTION PEOPLE*/}
				<Col span={12} xl={12} md={16} sm={24} xs={24}>
					<h2>
						{movie.title} ({movie.year})
					</h2>
					<p className="description">{movie.description}</p>

					<People people={movie.people} />
				</Col>

				{/* INFO */}
				<Col span={6} xl={6} md={24} sm={24} xs={24}>
					<div className="section">
						<p>Countries</p>
						<Space size={[0, 8]} wrap>
							{movie.countries.map((country, index) => {
								return (
									<Tag color="#aaa" key={index}>
										{country.title}
									</Tag>
								);
							})}
						</Space>
					</div>

					<div className="section">
						<p>Genres</p>
						<Space size={[0, 8]} wrap>
							{movie.genres.map((genre, index) => {
								return (
									<Tag color="#aaa" key={index}>
										{genre.title}
									</Tag>
								);
							})}
						</Space>
					</div>
					<div className="section">
						<p>Premiere</p>
						<Tag color="#13DF35">
							{movie.isNew
								? "Premiere"
								: time.formatTimestamp(
										movie.uploadTime,
										"DD/MM/YYYY"
								  )}
						</Tag>
					</div>

					<div className="section">
						<p>Age limit</p>
						<Tag color="#FF0000">+{movie.ageLimit}</Tag>
					</div>

					<div className="section">
						<p>Type</p>
						<Tag color={movie.isFree ? "#49E111" : "#1677FF"}>
							{movie.isFree ? "Free" : "Premium"}
						</Tag>
					</div>

					<div className="section">
						<div className="label">
							<p>Kinopoisk rating</p>
							<span>({movie.rating.kp.count})</span>
						</div>
						<Rate
							defaultValue={movie.rating.kp.rating}
							count={10}
						/>
					</div>

					<div className="section">
						<div className="label">
							<p>IMDB rating</p>
							<span>({movie.rating.imdb.count})</span>
						</div>
						<Rate
							defaultValue={movie.rating.imdb.rating}
							count={10}
						/>
					</div>
				</Col>
			</Row>

			<Gallery items={movie.gallery} />
			<Video movie={movie} />
		</div>
	);
}

export const getServerSideProps = async ({ req }: any) => {
	try {
		const { url } = req;
		const id = url.split("/").at(-1);
		const { data } = await mainCallerApi(`/movie-detail?id=${id}`, "GET");

		return {
			props: data,
		};
	} catch (error) {
		return {
			redirect: {
				destination: "/404",
			},
		};
	}
};
