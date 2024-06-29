import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function ClientsInsert() {
    const [photo, setPhoto] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [details, setDetails] = useState('');
    const turn=useNavigate();
    const save = () => {
        //console.log(photo,price,placename,details)
       
        const formdata=new FormData()
        formdata.append('photo',photo)
        formdata.append('name',name)
        formdata.append('address',address)
        formdata.append('details',details)
        //console.log(photo);
        axios.post("http://localhost/react_original_project/original/behind_scene/applications/clients_insert.php",formdata,{
            headers:{
                "Content-Type":"multipart/form-data"
            }
        })
        .then((res)=>{
            console.log(res.data)
            setPhoto('')
            setName('')
            setAddress('')
            setDetails('')
            turn('/clients-list')
        })
       


    }
    return (
        <>
            <h1>Customer's Feedback</h1>
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
                            <input type="text" onChange={(e) => setName(e.target.value)} value={name} className="form-control" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group">
                            <label htmlFor="">Address</label>
                            <input type="text" onChange={(e) => setAddress(e.target.value)} value={address} className="form-control" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group">
                            <label htmlFor="">Details</label>
                            <textarea
                                onChange={(e) => setDetails(e.target.value)} value={details}
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
        </>

    );
}
export default ClientsInsert;
