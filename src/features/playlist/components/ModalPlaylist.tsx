import React, { useState } from "react";
import { Modal } from "antd";
import ButtonDropdownPlaylist from "../../../components/common/Button/ButtonDropdownPlaylist.tsx";
import EditFormPlaylist from "./EditFormPlaylist.tsx";
import Dropdown from "../../../components/common/Dropdown/Dropdown";

const ModalCreatePlaylist: React.FC = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState<string>("");

	const showModal = (option: string) => {
		setSelectedOption(option);
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	return (
		<div>
			<ButtonDropdownPlaylist
				onMenuClick={(key: string) => showModal(key)}
				ariaLabel="edit playlist or delete playlist"
			/>
			<Dropdown
				showEdit={true}
				showDelete={true}
				// onEdit={() => console.log("Edit clicked")}
				onDelete={() => console.log("Delete clicked")}
			/>
			<Modal
				footer={null}
				centered
				title={
					selectedOption === "1"
						? "Delete"
						: selectedOption === "2"
						? "Edit details"
						: "Tiêu đề Modal"
				}
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}>
				{selectedOption === "1" && <p>xoá</p>}
				{selectedOption === "2" && (
					<EditFormPlaylist
						initialValues={{
							playlistName: "Kay",
							Description: "Description",
							isPublic: true,
						}}
						onSubmit={(values) => {
							console.log("Submitted Values:", values);
						}}
					/>
				)}
				{!selectedOption && <p>Chọn một mục để bắt đầu.</p>}
			</Modal>
		</div>
	);
};

export default ModalCreatePlaylist;
