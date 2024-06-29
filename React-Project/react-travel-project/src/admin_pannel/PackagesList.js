import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"
function PackagesList() {
    const [data, setData] = useState([]);
    const deletePackages = (id) => {
        axios.get(`http://localhost/react_original_project/original/behind_scene/applications/packages_delete.php?id=${id}`)
            .then((response) => {
                console.log(response.data)
                // axios.get('http://localhost/react_original_project/original/behind_scene/applications/services.php')
                // .then((response)=>{
                //     setData(response.data)
            })
    }
    useEffect(() => {
        axios.get('http://localhost/react_original_project/original/behind_scene/applications/packages.php')
            .then((response) => {
                setData(response.data)
            })
    }, [deletePackages])
    return (
        <div>
            <h1>Packages List</h1>
            <hr></hr>
            <NavLink to={'/packages-insert'}>
                <button className='btn btn-lg btn-primary'>Add New Packages</button>
            </NavLink>
            <br></br><br></br>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Photo</th>
                        <th>Price</th>
                        <th>Place Name</th>
                        <th>Details</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                {data.map((d, i) => (

                    <tbody >
                        <tr>
                            <td>{++i}</td>
                            <td><img src={`http://localhost/react_original_project/original/behind_scene/applications/pictures/${d.photo}`} alt={'photo'} height={100} /></td>
                            <td>{d.price}</td>
                            <td>{d.place_name}</td>
                            <td>{d.details}</td>
                            <td>
                                <NavLink to={`/packages-edit/${d.id}`}>
                                    <button className='btn btn-sm btn-success'>Update</button>
                                </NavLink>
                                <button className='btn btn-sm btn-danger' onClick={() => deletePackages(d.id)}>Delete</button>
                            </td>
                        </tr>
                    </tbody>

                ))}
            </table>
        </div>
    );
}
export default PackagesList;