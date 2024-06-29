import axios, { Axios } from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"
function ClientsList() {
    const [data, setData] = useState([]);
    const deleteClients = (id) => {
        axios.get(`http://localhost/react_original_project/original/behind_scene/applications/clients_delete.php?id=${id}`)
            .then((response) => {
                console.log(response.data)
                // axios.get('http://localhost/react_original_project/original/behind_scene/applications/services.php')
                // .then((response)=>{
                //     setData(response.data)
            })
    }
    useEffect(() => {
        axios.get('http://localhost/react_original_project/original/behind_scene/applications/clients.php')
            .then((response) => {
                setData(response.data)
            })
    }, [deleteClients ])
    return (
        <div>
            <h1>Customer's Comment's List</h1>
            <hr></hr>
            <NavLink to={'/clients-insert'}>
                <button className='btn btn-lg btn-primary'>Add New Comment</button>
            </NavLink>
            <br></br><br></br>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Comment/Feedback</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                {data.map((d, i) => (

                    <tbody >
                        <tr>
                            <td>{++i}</td>
                            <td><img src={`http://localhost/react_original_project/original/behind_scene/applications/pictures/${d.photo}`} alt={d.name} height={100} /></td>
                            <td>{d.customer_name}</td>
                            <td>{d.address}</td>
                            <td>{d.details}</td>
                            <td>
                                <NavLink to={`/clients-edit/${d.id}`}>
                                    <button className='btn btn-sm btn-success'>Update</button>
                                </NavLink>
                                <button className='btn btn-sm btn-danger' onClick={() => deleteClients(d.id)}>Delete</button>
                            </td>
                        </tr>
                    </tbody>

                ))}
            </table>
        </div>
    );
}
export default ClientsList;