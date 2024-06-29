import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"
function TeamList() {
    const [data, setData] = useState([]);
    const deleteTeam = (id) => {
        axios.get(`http://localhost/react_original_project/original/behind_scene/applications/team_delete.php?id=${id}`)
            .then((response) => {
                console.log(response.data)
                axios.get('http://localhost/react_original_project/original/behind_scene/applications/services.php')
                .then((response)=>{
                    setData(response.data)
            })
    }
    useEffect(() => {
        axios.get('http://localhost/react_original_project/original/behind_scene/applications/team.php')
            .then((response) => {
                setData(response.data)
            })
    }, [deleteTeam])
    return (
        <div>
            <h1>Team Member's List</h1>
            <hr></hr>
            <NavLink to={'/team-insert'}>
                <button className='btn btn-lg btn-primary'>Add New Team Member</button>
            </NavLink>
            <br></br><br></br>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>designation</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                {data.map((d, i) => (

                    <tbody >
                        <tr>
                            <td>{++i}</td>
                            <td><img src={`http://localhost/react_original_project/original/behind_scene/applications/pictures/${d.photo}`} alt={d.name} height={100} /></td>
                            <td>{d.name}</td>
                            <td>{d.designation}</td>
                            <td>
                                <NavLink to={`/team-edit/${d.id}`}>
                                    <button className='btn btn-sm btn-success'>Update</button>
                                </NavLink>
                                <button className='btn btn-sm btn-danger' onClick={() => deleteTeam(d.id)}>Delete</button>
                            </td>
                        </tr>
                    </tbody>

                ))}
            </table>
        </div>
    );
}
export default TeamList;