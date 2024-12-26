import { Form, Input, Checkbox, message } from "antd";
import Button from "../../../components/common/Button/Button";
import {
  updatePlaylistApi,
  fetchPlaylistById,
} from "../../../services/api/playlistService";
import { useEffect } from "react";

interface EditFormPlaylistProps {
  playlistId: string;
  onSuccess?: () => void;
  onClose: () => void;
}

interface PlaylistFormValues {
  playlistName: string;
  description: string;
  isPublic: boolean;
}

const EditFormPlaylist: React.FC<EditFormPlaylistProps> = ({
  playlistId,
  onSuccess,
  onClose,
}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchPlaylistById(playlistId);
        if (response.success && response.data) {
          form.setFieldsValue({
            playlistName: response.data.name,
            description: response.data.description,
            isPublic: response.data.isPublic,
          });
        } else {
          message.error("Failed to load playlist data");
        }
      } catch {
        message.error("Failed to load playlist data");
      }
    };
    fetchData();
  }, [playlistId, form]);

  const onFinish = async (values: PlaylistFormValues) => {
    try {
      await updatePlaylistApi(playlistId, {
        name: values.playlistName,
        description: values.description,
        isPublic: values.isPublic,
      });
      message.success("Playlist updated successfully!");
      if (onSuccess) {
        onSuccess();
      }
      onClose();
    } catch {
      message.error("Failed to update playlist");
    }
  };

  return (
    <Form
      form={form}
      layout="horizontal"
      labelCol={{ span: 6, style: { textAlign: "start" } }}
      wrapperCol={{ span: 18 }}
      requiredMark={false}
      style={{ color: "#fff" }}
      onFinish={onFinish}
    >
      <hr style={{ margin: "20px 0" }} />
      <Form.Item
        label={<span style={{ color: "#fff" }}>Playlist name</span>}
        name="playlistName"
        rules={[{ required: true, message: "Please enter the playlist name!" }]}
      >
        <Input
          placeholder="Playlist name"
          style={{
            backgroundColor: "#2b2b2b",
            color: "#fff",
            borderColor: "#444",
            borderRadius: "4px",
          }}
        />
      </Form.Item>

      <Form.Item
        label={<span style={{ color: "#fff" }}>Description</span>}
        name="description"
        rules={[{ required: true, message: "Please enter the description!" }]}
      >
        <Input
          placeholder="Description"
          style={{
            backgroundColor: "#2b2b2b",
            color: "#fff",
            borderColor: "#444",
            borderRadius: "4px",
          }}
        />
      </Form.Item>

      <Form.Item
        label={<span style={{ color: "#fff" }}>Public</span>}
        name="isPublic"
        valuePropName="checked"
      >
        <Checkbox className="custom-checkbox" />
      </Form.Item>

      <hr style={{ margin: "20px 0" }} />
      <Form.Item className="ant-form-item__footer">
        <Button className="btn btn__delete" text="Save" htmlType="submit" />
      </Form.Item>
    </Form>
  );
};

export default EditFormPlaylist;
