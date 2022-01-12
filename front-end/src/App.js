import React, { useState } from "react";
import Axios from "axios";

function App() {

  const [values, setValues] = useState();

  const handleChange = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  }

  const handleClick = async () => {
    try {
      await Axios({
        method: 'post',
        url: 'http://localhost:3001/users',
        fullname: values.fullname,
      });
    } catch (error) {
      console.error(error.response.data.message);
    }
  }
      

  return (
    <div>
    <form>
      <label>
        Nome:
        <br />
        <input 
          type="name" 
          name="fullName" 
          placeholder='digite seu nome completo'
          onChange={ handleChange }
        />
      </label>
        <br />
      <button 
        type="button"
        onClick={ handleClick }
      >
        Cadastrar
      </button>
        <br /><br />
    </form>
    </div>
  );
}

export default App;
