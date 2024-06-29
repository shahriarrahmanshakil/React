import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
function TeamEdit() {
    const [photo, setPhoto] = useState('');
    const [name, setName] = useState('');
    const [designation, setDesignation] = useState('');
    const {id}=useParams();
    const turn=useNavigate();
    useEffect(() => {
        axios.get(`http://localhost/react_original_project/original/behind_scene/applications/getTeam.php?id=${id}`)
            .then((res) => {
                setPhoto(res.data.photo)
                setName(res.data.name)
                setDesignation(res.data.designation)
            })
    }, [])
    const save = () => {
        //console.log(photo,name,designation)
       
        const formdata=new FormData()
        formdata.append('photo',photo)
        formdata.append('name',name)
        formdata.append('designation',designation)
        formdata.append('id',id)
        axios.post("http://localhost/react_original_project/original/behind_scene/applications/team_edit.php",formdata,{
            headers:{
                "Content-Type":"multipart/form-data"
            }
        })
        .then((res)=>{
            console.log(res.data)
            setPhoto('')
            setName('')
            setDesignation('')
            turn('/team-list')
        })
       
       
       
    }
    return (
        <>
            <h1>Team Member Update Form</h1>
            <hr></hr>
            <div className="card-body">
                <div className="row">
                    <div className="col-6">
                        <div className="form-group">
                            <label htmlFor="">Photo</label>
                            <input type="file" onChange={(e) => setPhoto(e.target.files[0])} className="form-control" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group">
                            <label htmlFor="">Name</label>
                            <input type="text" onChange={(e) => setName(e.target.value)}  value={name} className="form-control" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group">
                            <label htmlFor="">Designation</label>
                            <input type="text" onChange={(e) => setDesignation(e.target.value)}  value={designation} className="form-control" />
                        </div>
                    </div>
                </div>
            </div>
            <br /> <br />
            <div className="card-footer">
                <button className="btn btn-md btn-primary" onClick={save}>Update</button>
            </div>
        </>

    );
}
export default TeamEdit;
