import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"
function ServicesList() {
    const [data, setData] = useState([]);
    const deleteServices = (id) => {
        axios.get(`http://localhost/react_original_project/original/behind_scene/applications/services_delete.php?id=${id}`)
            .then((response) => {
                console.log(response.data)
                // axios.get('http://localhost/react_original_project/original/behind_scene/applications/services.php')
                // .then((response)=>{
                //     setData(response.data)
            })
    }
    useEffect(() => {
        axios.get('http://localhost/react_original_project/original/behind_scene/applications/services.php')
            .then((response) => {
                setData(response.data)
            })
    }, [deleteServices])
    return (
        <div>
            <h1>Services List</h1>
            <hr></hr>
            <NavLink to={'/services-insert'}>
                <button className='btn btn-lg btn-primary'>Add New Service</button>
            </NavLink>
            <br></br><br></br>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Title</th>
                        <th>Details</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                {data.map((d, i) => (

                    <tbody >
                        <tr>
                            <td>{++i}</td>
                            <td>{d.title}</td>
                            <td>{d.details}</td>
                            <td>
                                <NavLink to={`/services-edit/${d.id}`}>
                                    <button className='btn btn-sm btn-success'>Update</button>
                                </NavLink>
                                <button className='btn btn-sm btn-danger' onClick={() => deleteServices(d.id)}>Delete</button>
                            </td>
                        </tr>
                    </tbody>

                ))}
            </table>
        </div>
    );
}
export default ServicesList;