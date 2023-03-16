import { useState } from "react";
import React from 'react';

function FruitPicker() {
    const [selectedFruit, setSelectedFruit] = useState('orange'); // Declare a state variable...
    const [topping, setTopping] = useState("Medium")

    const onOptionChange = e => {
      setTopping(e.target.value)
    }

    return (
      <>
      <select
        value={selectedFruit} // ...force the select's value to match the state variable...
        onChange={e => setSelectedFruit(e.target.value)} // ... and update the state variable on any change!
      >
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="orange">Orange</option>
      </select>
      <br/>
      <br/>
      <input
        type="radio"
        name="topping"
        value="Regular"
        id="regular"
        checked={topping === "Regular"}
        onChange={onOptionChange}
      />
      <label htmlFor="regular">Regular</label>

      <input
        type="radio"
        name="topping"
        value="Medium"
        id="medium"
        checked={topping === "Medium"}
        onChange={onOptionChange}
      />
      <label htmlFor="medium">Medium</label>

      <input
        type="radio"
        name="topping"
        value="Large"
        id="large"
        checked={topping === "Large"}
        onChange={onOptionChange}
      />
      <label htmlFor="large">Large</label>

      <p>
        Select topping <strong>{topping}</strong>
      </p>
    </>
    );
}

export default FruitPicker;