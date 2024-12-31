import React, { useState } from "react";
import { Modal } from "antd";
import ButtonDropdown from "../Button/ButtonDropdown.tsx";

const ModalCreatePlaylist: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>("");

  const showModal = (option: string) => {
    setSelectedOption(option);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    console.log("Đã lưu:", selectedOption);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    console.log("Đóng modal");
    setIsModalOpen(false);
  };

  return (
    <div>
      <ButtonDropdown
        onMenuClick={(key: string) => showModal(key)}
        ariaLabel="Create playlist or folder"
      />
      <Modal
        title={
          selectedOption === "1"
            ? "Tạo nghệ sĩ mới"
            : selectedOption === "2"
            ? "Tạo playlist mới"
            : "Tiêu đề Modal"
        }
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Lưu"
        cancelText="Hủy"
      >
        {selectedOption === "1" && <p>Form để tạo nghệ sĩ mới nằm ở đây.</p>}
        {selectedOption === "2" && <p>Form để tạo playlist mới nằm ở đây.</p>}
        {!selectedOption && <p>Chọn một mục để bắt đầu.</p>}
      </Modal>
    </div>
  );
};

export default ModalCreatePlaylist;
