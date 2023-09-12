import { Card, Rate, Space, Tag } from "antd";
import Link from "next/link";
import React from "react";

export default function MovieCard({ movie }: any) {
	return (
		<Link href={`movie/${movie.id}`}>
			<Card
				hoverable
				className="movie-card"
				cover={
					<img src={movie.poster} alt={movie.title} height={300} />
				}
			>
				<div
					style={{
						padding: 10,
					}}
				>
					<p className="movie-title">{movie.title}</p>
					<Rate
						className="rate"
						disabled
						defaultValue={movie.kp_rating}
					/>
				</div>
				<div className="movie-card-content">
					<p className="movie-title">{movie.title}</p>
					<p className="movie-year">
						({movie.year}) {movie.isSerial ? "Serial" : "Film"}
					</p>

					<Space size={[0, 8]} wrap>
						<br />
						{movie.isNew ? (
							<Tag color="#FF0D0D">Premiere</Tag>
						) : null}
						{movie.ageLimit ? (
							<Tag color="#FF0000">+{movie.ageLimit}</Tag>
						) : null}
						<Tag color={movie.isFree ? "#49E111" : "#1677FF"}>
							{movie.isFree ? "Free" : "Premium"}
						</Tag>
					</Space>
				</div>
			</Card>
		</Link>
	);
}
