import React from "react";
import { Form, Input, Checkbox } from "antd";
import CustomButton from "../../../components/common/Button/CustomButton";
interface EditDetailFormProps {
  initialValues?: {
    playlistName: string;
    Description: string;
    isPublic: boolean;
  };
  onSubmit: (values: {
    playlistName: string;
    Description: string;
    isPublic: boolean;
  }) => void;
}

const EditFormPlaylist: React.FC<EditDetailFormProps> = ({
  initialValues,
  onSubmit,
}) => {
  const [form] = Form.useForm();

  const handleFinish = (values: {
    playlistName: string;
    Description: string;
    isPublic: boolean;
  }) => {
    onSubmit(values);
  };

  return (
    <Form
      form={form}
      onFinish={handleFinish}
      layout="horizontal"
      labelCol={{ span: 6, style: { textAlign: "start" } }}
      wrapperCol={{ span: 18 }}
      initialValues={initialValues}
      requiredMark={false}
      style={{ color: "#fff" }}
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
        name="Description"
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
        <CustomButton
          className="btn btn__save"
          text="Save"
          type="primary"
          htmlType="submit"
          block
        />
      </Form.Item>
    </Form>
  );
};

export default EditFormPlaylist;
