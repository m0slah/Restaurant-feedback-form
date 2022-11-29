import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [secondName, setSecondName] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState(false);

  const setSecondNameHandler = (event) => {
    if (
      event.target.value.trim().length > 2 &&
      event.target.value.trim().length <= 12
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
    setSecondName(event.target.value);
  };

  const SubmitHandler = (event) => {
    event.preventDefault();

    if (secondName.length < 3 && secondName.length < 12) {
      setError(true);
      return;
    } else {
      setError(false)
    }
  };

  return (
    <div>
      <form onSubmit={SubmitHandler}>
        <div>
          <label>First name</label>
          <br />
          <input className="input" type="text" placeholder="First name" />
        </div>

        <div className={`formControl ${!isValid && "invalid"}`}>
          <label>Second Name</label>
          <br />
          <input
            className="input secondName"
            type="text"
            value={secondName}
            placeholder="Second name"
            onChange={setSecondNameHandler}
          />
        </div>
        {error ? <label className="error">Please Second Name Should between 3-12 characters.</label> : ""}

        <div>
          <label>Email</label>
          <br />
          <input className="input" type="email" placeholder="Email" />
        </div>

        <div>
          <label className="input" for="cars">
            Location You Visited
          </label>
          <select value="Duhok" name="cars" id="cars" required>
            <option value="volvo">Erbil</option>
            <option value="saab">Sulimanyah</option>
            <option value="mercedes">Duhok</option>
            <option value="audi">Karkuk</option>
          </select>
        </div>

        <div>
          <label>Day Visited</label>
          <br />
          <input className="input" type="date" name="datetime" required />
        </div>

        <div>
          <label>Time Visited</label>
          <br />
          <input className="input" type="time" required />
        </div>

        <div>
          <label>Dine In / Take Out</label>
          <br />
          <input type="checkbox" /> <label>Dine In</label>
          <br />
          <input type="checkbox" /> <label>Take Out</label>
        </div>

        <div>
          <label>Age</label>
          <br />
          <input className="input" type="number" />
        </div>

        <div>
          <label>Any Comments, question or suggesttions?</label>
          <br />
          <input className="input comment" type="text" />
        </div>

        <div>
          <button type="submit" className="button">
            SEND FEDBACK
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
