import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
function ClientsEdit() {
    const [photo, setPhoto] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [details, setDetails] = useState('');
    const {id}=useParams();
    const turn = useNavigate();
    useEffect(() => {
        axios.get(`http://localhost/react_original_project/original/behind_scene/applications/getClients.php?id=${id}`)
            .then((res) => {
                setPhoto(res.data.photo)
                setName(res.data.customer_name)
                setAddress(res.data.address)
                setDetails(res.data.details)
            })
    }, [])
    const save = () => {
        // console.log(photo,price,placename,details)
       
          
        const formdata=new FormData()
        formdata.append('photo',photo)
        formdata.append('name',name)
        formdata.append('address',address)
        formdata.append('details',details)
        formdata.append('id',id)
        //console.log(id)

        //console.log(placename);
        axios.post("http://localhost/react_original_project/original/behind_scene/applications/clients_edit.php",formdata,{
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
            <h1>Customer's Feedback Edit</h1>
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
                            <input type="text" onChange={(e) => setAddress(e.target.value)} value={address} className="form-control"/>
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
                <button className="btn btn-md btn-primary" onClick={save}>Update</button>
            </div>
        </>

    );
}
export default ClientsEdit;
