const AddTask = ({handleSubmit, handleChange}) => {
  return (
    <div>
      <form className="form-group" onSubmit={handleSubmit}>

        <div className="form-group text-start">
          <label htmlFor="formGroupExampleInput">Add Task</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Add Task"
            onChange={(e)=>handleChange(e)}
          />
        </div>
        <div className="form-group text-start">
          <label htmlFor="formGroupExampleInput2">Day & Time</label>
          <input
            type="text"
            className="form-control"
            id="date"
            placeholder="Add Day & Time"
            onChange={(e)=>handleChange(e)}
          />
        </div>

        <button type="submit" className="btn btn-success mt-3 w-100">
          Save Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
