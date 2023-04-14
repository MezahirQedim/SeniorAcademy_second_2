import React from "react";

const Form = () => {
  const [title, setTitle] = React.useState("");
  const [descriptions, setDescriptions] = React.useState("");

  const [list, setList] = React.useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newList = list;
    newList.push({
      title: title,
      descriptions: descriptions,
    });

    setList(newList);
    setTitle("")
    setDescriptions("")
  };

  

  return (
    <div>
      <div className="d-flex justify-content-center">
        <form
          className="form-control m-2 w-50 bg-primary"
          onSubmit={handleSubmit}
        >
          <label className="mt-2 text-white">Title</label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          />
          <label className="mt-2 text-white">Descriptions</label>
          <textarea
            onChange={(e) => setDescriptions(e.target.value)}
            className="form-control"
          />
          <button className="btn btn-warning mt-3 w-100" type="submit">
            Add
          </button>
        </form>
      </div>

      <ul>
        {list.map((x, y) => (
          <li>{x.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Form;
