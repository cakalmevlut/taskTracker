import { useState } from "react";

const GorevEkle = ({ gorevler, setGorevler }) => {
  const [text1, setText] = useState("");
  const [date, setDate] = useState("");
  
  



  const yapSubmit = (e) => {
    e.preventDefault();
    setGorevler([
      {
        id: gorevler.length + 1,
        text: text1,
        day: date,
       
        bittiMi: false,
      },
      ...gorevler,
    ]);

    setText("");
    setDate("");
  };

  return (
    <div>
      <form onSubmit={yapSubmit}>
        <div className="form-control">
          <label htmlFor="text">Task</label>

          <input
            id="text"
            type="text"
            placeholder="Add Task"
            name="text"
            value={text1}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>

        <div className="form-control">
          <label htmlFor="day">Day & Time</label>

          <input
            id="day"
            type="date"
            name="day"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </div>

        <div>
          <button className="btn btn-submit" type="submit">
            SUBMİT
          </button>
        </div>
      </form>
    </div>
  );
};

export default GorevEkle;
