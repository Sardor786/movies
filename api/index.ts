import axios from "axios";

export const getMainUrl = () => "https://api.cinerama.uz/api-test";

export default async function mainCallerApi(
	url: string,
	method: "GET" | "POST" | "PUT" | "PATCH",
	data?: any,
	headers?: any
) {
	const options = {
		url: getMainUrl() + url,
		method,
		headers: {
			"Content-Type": "application/json",
			"secret-token": "1238204e-adb5-4a8f-93b9-998cddcbeee8",
		},
		data: null,
	};

	if (data) {
		options.data = data;
	}
	if (headers) {
		options.headers = { ...options.headers, ...headers };
	}

	return axios(options).then((res) => res.data);
}

export const mainApiInstence = axios.create({
	baseURL: getMainUrl(),
	headers: {
		Accept: "application/json",
	},
});
