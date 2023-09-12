import React from "react";
import { Button } from "antd";
import { useRouter } from "next/router";

export default function BackButton() {
	const router = useRouter();

	return (
		<Button
			type="text"
			className="back-button"
			onClick={() => router.back()}
			icon={
				<svg
					xmlns="http://www.w3.org/2000/svg"
					version="1.1"
					width="16"
					height="16"
					x="0"
					y="0"
					viewBox="0 0 24 24"
				>
					<g>
						<path
							d="M22 11H4.414l5.293-5.293a1 1 0 1 0-1.414-1.414l-7 7a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414-1.414L4.414 13H22a1 1 0 0 0 0-2z"
							fill="#000000"
							data-original="#000000"
						></path>
					</g>
				</svg>
			}
		/>
	);
}
