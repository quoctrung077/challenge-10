import React, { useState } from "react";
import { Modal } from "antd";
import ButtonDropdownPlaylist from "../../../components/common/Button/ButtonDropdownPlaylist.tsx";
import EditFormPlaylist from "./EditFormPlaylist.tsx";
import Delete from "../../../components/common/Form/Delete.tsx";
import { deletePlaylistApi } from "../../../services/api/playlistService.tsx";
import { useNavigate } from "react-router-dom";

const ModalCreatePlaylist: React.FC = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<{
    option: string;
    id?: string;
  }>({ option: "" });
  const showModal = (key: string) => {
    const option = key.split("-")[0];
    const id = key.slice(option.length + 1);
    setSelectedOption({ option, id });
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleDelete = async () => {
    if (selectedOption.id) {
      try {
        await deletePlaylistApi(selectedOption.id);
        setIsModalOpen(false);
        navigate("/");
        window.location.reload();
      } catch {
        setIsModalOpen(false);
      }
    }
  };

  return (
    <div>
      <ButtonDropdownPlaylist
        onMenuClick={(key: string) => showModal(key)}
        ariaLabel="edit playlist or delete playlist"
      />

      <Modal
        footer={null}
        centered
        title={
          selectedOption.option === "delete"
            ? "Delete from Your Playlist?"
            : selectedOption.option === "edit"
            ? "Edit Playlist Details"
            : "Playlist Options"
        }
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {selectedOption.option === "delete" && selectedOption.id && (
          <Delete
            classNameText="delete"
            classNameSpan="delete__span"
            textName="Playlist"
            textPage="Your Playlist."
            handleCancel={handleCancel}
            handleDelete={handleDelete}
          />
        )}

        {selectedOption.option === "edit" && selectedOption.id && (
          <EditFormPlaylist
            onClose={handleCancel}
            playlistId={selectedOption.id}
          />
        )}
        {!selectedOption.option && <p>Please select an option to start.</p>}
      </Modal>
    </div>
  );
};

export default ModalCreatePlaylist;
