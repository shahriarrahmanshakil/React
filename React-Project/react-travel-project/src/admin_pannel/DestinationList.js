import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"
function DestinationList() {
    const [data, setData] = useState([]);
    const deleteDestination = (id) => {
        axios.get(`http://localhost/react_original_project/original/behind_scene/applications/destination_delete.php?id=${id}`)
            .then((response) => {
                console.log(response.data)
                // axios.get('http://localhost/react_original_project/original/behind_scene/applications/services.php')
                // .then((response)=>{
                //     setData(response.data)
            })
    }
    useEffect(() => {
        axios.get('http://localhost/react_original_project/original/behind_scene/applications/destination.php')
            .then((response) => {
                setData(response.data)
            })
    }, [deleteDestination])
    return (
        <div>
            <h1>Destination List</h1>
            <hr></hr>
            <NavLink to={'/destination-insert'}>
                <button className='btn btn-lg btn-primary'>Add New Destination</button>
            </NavLink>
            <br></br><br></br>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Photo</th>
                        <th>Sticker</th>
                        <th>Place Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                {data.map((d, i) => (

                    <tbody >
                        <tr>
                            <td>{++i}</td>
                            <td><img src={`http://localhost/react_original_project/original/behind_scene/applications/pictures/${d.photo}`} alt={'Photo'} height={100} /></td>
                            <td>{d.sticker}</td>
                            <td>{d.place_name}</td>
                            <td>
                                <NavLink to={`/destination-edit/${d.id}`}>
                                    <button className='btn btn-sm btn-success'>Update</button>
                                </NavLink>
                                <button className='btn btn-sm btn-danger' onClick={() => deleteDestination(d.id)}>Delete</button>
                            </td>
                        </tr>
                    </tbody>

                ))}
            </table>
        </div>
    );
}
export default DestinationList;