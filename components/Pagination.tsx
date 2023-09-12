import { Pagination } from "antd";
import React from "react";

export default function PaginationComponent({
	currentPage,
	perPage,
	total,
	onChange = () => {},
}: any) {
	return (
		<div className="pagination-wrapper">
			<div className="total-count">
				Total count: <b>{total}</b>
			</div>
			<Pagination
				current={currentPage}
				total={total}
				pageSize={perPage}
				pageSizeOptions={[12, 24, 48, 96]}
				onChange={onChange}
			/>
		</div>
	);
}
