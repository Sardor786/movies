import dayjs from "dayjs";

const time = {
	formatTimestamp: (timestamp, format = "DD.MM.YYYY HH:mm") =>
		timestamp ? dayjs.unix(timestamp).format(format) : "",
};

export default time;
