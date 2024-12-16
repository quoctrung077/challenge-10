type LableProps = {
  text: string;
  id: string;
};
const Lable = ({ text, id }: LableProps) => {
  return (
    <div className="lable lable--group">
      <label htmlFor={id} className="lable__text">
        <span className="lable__inliner">{text}</span>
      </label>
    </div>
  );
};

export default Lable;
