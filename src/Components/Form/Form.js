import React from "react";
import "./Form.css";
const Form = () => {
  return (
    <div>
      <form>
        <br />
        <label>First name</label>
        <br />
        <input className="input" type="text" placeholder="first name" />
        <br />
        <label>Second Name</label>
        <br />
        <input className="input" type="text" placeholder="second name" />
        <br />
        <label>Email</label>
        <br />
        <input className="input" type="email" placeholder="email" />
        <label className="input" for="cars">
          Location You Visited
        </label>
        <br />
        <select value="Duhok" name="cars" id="cars" required>
          <option value="volvo">Erbil</option>
          <option value="saab">Sulimanyah</option>
          <option value="mercedes">Duhok</option>
          <option value="audi">Karkuk</option>
        </select>
        <br />
        <label>Day Visited</label>
        <br />
        <input className="input" type="date" name="datetime" required/>
        <br />
        <label>Time Visited</label>
        <br />
        <input className="input" type="time" required/>
        <br />
        <label>Dine In / Take Out</label>
        <br />
        <input type="checkbox" /> <label>Dine In</label>
        <br />
        <input type="checkbox" /> <label>Take Out</label>
        <br />
        <label>Age</label>
        <br />
        <input className="input" type="number" />
        <br />
        <label>Any Comments, question or suggesttions?</label>
        <br />
              <input className="input comment" type="text" />
              <button type="submit" className="button">SEND FEDBACK</button>
      </form>
    </div>
  );
};

export default Form;
