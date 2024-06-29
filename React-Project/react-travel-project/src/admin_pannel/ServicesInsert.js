import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ServicesInsert() {
    const [title,setTitle]=useState('');
    const [details,setDetails]=useState('');
    const turn=useNavigate();
    const save=()=>{
        //console.log(title,details)
     axios.post('http://localhost/react_original_project/original/behind_scene/applications/services_insert.php', {title:title,details: details},{
       headers:{
           "Content-Type":"application/json"
        }
    })
    .then((response)=>{
        console.log(response.data)
        turn('/services-list')
    })
    }
    return (
        <>
            <h1>Services Entry Form</h1>
            <hr></hr>
            {/* <form action="" method="post"> */}
                <div className="card-body">
                    <div className="row">
                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="">Title</label>
                                <input type="text" onChange={(e)=>setTitle(e.target.value)} className="form-control"  />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="">Details</label>
                                <textarea
                                    onChange={(e)=>setDetails(e.target.value)}
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
                    <button className="btn btn-md btn-primary" onClick={save}>Submit</button>
                </div>
            {/* </form> */}

        </>
    );
}
export default ServicesInsert;