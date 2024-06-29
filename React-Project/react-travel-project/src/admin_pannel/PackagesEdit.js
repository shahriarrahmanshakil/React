import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
function PackagesEdit() {
    const [photo, setPhoto] = useState('');
    const [price, setPrice] = useState('');
    const [placename, setPlacename] = useState('');
    const [details, setDetails] = useState('');
    const {id}=useParams();
    const turn=useNavigate();
    useEffect(() => {
        axios.get(`http://localhost/react_original_project/original/behind_scene/applications/getPackages.php?id=${id}`)
            .then((res) => {
                setPhoto(res.data.photo)
                setPrice(res.data.price)
                setPlacename(res.data.place_name)
                setDetails(res.data.details)
            })
    }, [])
    const save = () => {
        //console.log(photo,price,placename,details)
       
          
        const formdata=new FormData()
        formdata.append('photo',photo)
        formdata.append('price',price)
        formdata.append('placename',placename)
        formdata.append('details',details)
        formdata.append('id',id)
        //console.log(id)

        //console.log(placename);
        axios.post("http://localhost/react_original_project/original/behind_scene/applications/packages_edit.php",formdata,{
            headers:{
                "Content-Type":"multipart/form-data"
            }
        })
        .then((res)=>{
            console.log(res.data)
            setPhoto('')
            setPrice('')
            setPlacename('')
            setDetails('')
            turn('/packages-list')
        })
       
       
       
    }
    return (
        <>
            <h1>Packages Update Form</h1>
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
                            <label htmlFor="">Price</label>
                            <input type="text" onChange={(e) => setPrice(e.target.value)}  value={price} className="form-control" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group">
                            <label htmlFor="">Place Name</label>
                            <input type="text" onChange={(e) => setPlacename(e.target.value)}  value={placename} className="form-control" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group">
                            <label htmlFor="">Details</label>
                            <textarea
                               onChange={(e) => setDetails(e.target.value)}  value={details}
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
export default PackagesEdit;
