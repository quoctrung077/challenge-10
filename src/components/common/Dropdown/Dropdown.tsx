import React from "react";

export interface DropdownProps {
	showEdit?: boolean;
	showDelete?: boolean;
	onEdit?: () => void;
	onDelete?: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({
	showEdit = true,
	showDelete = true,
	onEdit,
	onDelete,
}: DropdownProps) => {
	return (
		<div className="dropdown">
			{showEdit && (
				<button className="dropdown__item" onClick={onEdit}>
					<span className="dropdown__icon">
						<svg width="16" height="16" viewBox="0 0 16 16">
							<path d="M11.7 1.3c-.4-.4-1-.4-1.4 0l-8 8c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l8-8c.4-.4.4-1 0-1.4l-4-4zM3 13v-2.8l7.3-7.3 2.8 2.8L5.8 13H3z" />
						</svg>
					</span>
					<span className="dropdown__text">Edit details</span>
				</button>
			)}

			{showDelete && (
				<button className="dropdown__item" onClick={onDelete}>
					<span className="dropdown__icon">
						<svg width="16" height="16" viewBox="0 0 16 16">
							<path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z" />
							<path d="M12 8.5H4v-1h8v1z" />
						</svg>
					</span>
					<span className="dropdown__text">Delete</span>
				</button>
			)}
		</div>
	);
};

export default Dropdown;
