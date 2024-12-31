import Button from "../Button/Button.tsx";

interface DeleteProps {
  classNameText: string;
  classNameSpan: string;
  textName?: string;
  textPage?: string;
  handleCancel: () => void;
  handleDelete: () => void;
}

const Delete: React.FC<DeleteProps> = ({
  classNameText,
  classNameSpan,
  textName,
  textPage,
  handleDelete,
  handleCancel,
}) => {
  return (
    <>
      <p className={classNameText}>
        This will delete <span className={classNameSpan}>{textName} </span>from{" "}
        <span className={classNameSpan}>{textPage} </span>
      </p>
      <div className="btn__delete-wrapper">
        <Button
          onClick={handleCancel}
          className="btn btn__cancel"
          text="Cancel"
        />
        <Button
          onClick={handleDelete}
          className="btn btn__delete"
          text="Delete"
        />
      </div>
    </>
  );
};

export default Delete;
