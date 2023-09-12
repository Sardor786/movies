import React from "react";
import qs from "querystring";

export default function Home() {
	return <div></div>;
}

export const getServerSideProps = async () => {
	return {
		redirect: {
			destination: "/movies?" + qs.stringify({ page: 1, size: 24 }),
		},
	};
};
