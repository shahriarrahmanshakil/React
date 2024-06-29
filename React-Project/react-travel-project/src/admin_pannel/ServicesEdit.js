import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ServicesEdit() {
    const [title,setTitle]=useState('');
    const [details,setDetails]=useState('');
    const{id}=useParams();
    const turn=useNavigate();
    useEffect(()=>{
        axios.get(`http://localhost/react_original_project/original/behind_scene/applications/getservices.php?id=${id}`)
        .then((res)=>{
            setTitle(res.data.title)
            setDetails(res.data.details)
        })
    },[])
    const save=()=>{
        
        axios.post('http://localhost/react_original_project/original/behind_scene/applications/services_edit.php', {title:title,details:details,id:id},{
        headers:{
            "Content-Type":"application/json"
        }
    })
    .then((response)=>{
        console.log(response.data);
        turn('/services-list')
    })
    }
    return (
        <>
            <h1>Services Edit Form</h1>
            <hr></hr>
            {/* <form action="" method="post"> */}
                <div className="card-body">
                    <div className="row">
                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="">Title</label>
                                <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title} className="form-control" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="">Details</label>
                                <textarea
                                    onChange={(e)=>setDetails(e.target.value)}
                                    value={details}
                                    cols={10}
                                    rows={10}
                                    className="form-control"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <br /> <br />
                <div className="card-footer">
                <button className="btn btn-md btn-primary" onClick={save}>Update</button>
                </div>
            {/* </form> */}

        </>
    );
}
export default ServicesEdit;