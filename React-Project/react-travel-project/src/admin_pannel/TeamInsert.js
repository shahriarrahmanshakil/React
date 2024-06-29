import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function TeamInsert() {
    const [photo, setPhoto] = useState('');
    const [name, setName] = useState('');
    const [designation, setDesignation] = useState('');
    const turn=useNavigate();
    const save = () => {
        //console.log(photo,name,designation)
       
        const formdata=new FormData()
        formdata.append('photo',photo)
        formdata.append('name',name)
        formdata.append('designation',designation)
        console.log(photo);
        axios.post("http://localhost/react_original_project/original/behind_scene/applications/team_insert.php",formdata,{
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
            <h1>Team Member Entry Form</h1>
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
                <button className="btn btn-md btn-primary" onClick={save}>Submit</button>
            </div>
        </>

    );
}
export default TeamInsert;
