import { Space, Tag } from "antd";
import React, { useState } from "react";

export default function People({ people }: any) {
	const [hovered, setHovered] = useState({ id: 0, index: 0, i: 0 });

	return people.map((item: any, i: number) => {
		return (
			<div key={i} className="section">
				<p>{item.post}</p>
				<Space size={[0, 8]} wrap>
					{item.employees.map((person: any, index: number) => {
						const isHover =
							hovered.id === person.id &&
							hovered.index === index &&
							hovered.i === i;

						return (
							<div
								key={index}
								className="tag-wrapper"
								onMouseLeave={() =>
									setHovered({ id: 0, index: 0, i: 0 })
								}
							>
								<Tag
									className="tag"
									key={index}
									onMouseEnter={() =>
										setHovered({
											id: person.id,
											index: index,
											i: i,
										})
									}
								>
									{person.fullName}
								</Tag>
								<div
									className="person_info"
									style={{
										opacity: isHover ? "1" : "0",
										zIndex: isHover ? "1" : "-1",
									}}
								>
									<img
										src={person.photo}
										width={60}
										height={90}
										alt={person.fullName}
									/>
								</div>
							</div>
						);
					})}
				</Space>
			</div>
		);
	});
}
