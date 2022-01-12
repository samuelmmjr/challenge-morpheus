import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

function Cadastro() {

    const[values, setValues] = useState();

    const handleChange = (value) => {
        setValues((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }));
    }

    const resetInputs = () => {
        setValues('');
    };

    const handleClick = async () => {
        try {
            await Axios({
                method: 'post',
                url: 'http://localhost:3001/users',
                data: { fullName: values.fullName },
            });
        } catch (error) {
            console.error(error);
            resetInputs()
        }
    }
        return (
            <div>
                <h1>Cadastro</h1>
                <form>
                    <label>
                        Nome:
                        <br />
                        <input
                            type="name"
                            name="fullName"
                            placeholder='digite seu nome completo'
                            onChange={handleChange}
                        />
                    </label>
                    <br />
                    <button
                        type="submit"
                        onClick={handleClick}
                    >
                        Cadastrar
                    </button>
                    <br /><br />
                    <Link to="/consulta">
                            Consultar
                    </Link>
                    <br /><br />
                </form>
            </div>
        )
    }

    export default Cadastro;
