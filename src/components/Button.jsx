const Button = ({ visible, onShow }) => {
  return (
    <div>
      <button
        className={visible ? "btn btn-danger" : "btn btn-success"}
        onClick={onShow}
      >
        {visible ? "Close Add Task Bar" : "Show Add Task Bar"}
      </button>
    </div>
  );
};

export default Button;
