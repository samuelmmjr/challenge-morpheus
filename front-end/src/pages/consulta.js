import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
const Axios = require('axios');


function Consulta() {

    const [names, setNames] = useState([]);
    const [filterName, setFilterName] = useState([]);

    async function getNames() {
        try {
            const response = await Axios({
                method: 'get',
                url: 'http://localhost:3001/users',
            });
            setNames(response.data);
            setFilterName(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => { getNames(); }, []);

    const handleChange = ({target}) => {
        if(!target.value) {
            setNames(filterName)
            return
        }
        const filtered = names.filter(({fullName}) => fullName.includes(target.value))
        setNames(filtered);
    }

    return (
        <div>
            <Link to="/">Home</Link>
            <br />
            Pesquisar:
            <br />
            <input onChange={ handleChange } placeholder='Digite aqui'/>
            <table>

                <tbody>
                    {names.map((name) => (
                        <tr key={name.id}>
                            <td>{name.fullName}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}

export default Consulta;
