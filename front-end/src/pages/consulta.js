import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
const Axios = require('axios');


function Consulta() {

    const [names, setNames] = useState([]);

    async function getNames() {
        try {
            const response = await Axios({
                method: 'get',
                url: 'http://localhost:3001/users',
            });
            setNames(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => { getNames(); }, []);

    return (
        <div>
            <Link to="/">Home</Link>
            <table>
                <thead>
                    <tr>
                        <th> Lista de nomes </th>
                    </tr>
                </thead>
                <tbody>
                    {names.map((n) => (
                        <tr key={n.id}>
                            <td>{n.fullName}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}

export default Consulta;
