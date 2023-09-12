import React from "react";
import { useRouter } from "next/router";
import qs from "querystring";
import { Col, Row } from "antd";

import mainCallerApi from "/pages/api";
import { MovieItemTypes, MovieListTypes } from "/pages/types";
import Pagination from "./components/Pagination";
import MovieCard from "./components/MovieCard";

export default function Movies(props: MovieListTypes) {
	const router = useRouter();
	const { query } = router;
	const { page, size } = query;

	const { currentPage, total, movies, perPage } = props;

	function onChange(page: number, size: number) {
		router.push(
			{
				pathname: "/movies",
				query: {
					page,
					size,
				},
			},
			undefined,
			{
				scroll: true,
			}
		);
	}

	return (
		<div>
			<h1 className="title">Movies</h1>
			<Row gutter={[32, 32]}>
				{movies.map((movie: MovieItemTypes) => {
					return (
						<Col
							key={movie.id}
							span={12}
							xl={4}
							md={6}
							sm={8}
							xs={12}
						>
							<MovieCard movie={movie} />
						</Col>
					);
				})}
			</Row>
			<Pagination
				total={total}
				currentPage={page ? Number(page) : currentPage}
				perPage={size ? Number(size) : perPage}
				onChange={onChange}
			/>
		</div>
	);
}

export const getServerSideProps = async (ctx: any) => {
	const { query } = ctx;
	const { page, size } = query;

	try {
		const { data } = await mainCallerApi(
			"/movie-list?" + qs.stringify({ page, items: size }),
			"GET"
		);
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
