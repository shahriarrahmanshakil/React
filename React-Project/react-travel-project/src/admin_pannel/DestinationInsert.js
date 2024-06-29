import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function DestinationInsert() {
    const [photo, setPhoto] = useState('');
    const [sticker, setSticker] = useState('');
    const [placename, setPlacename] = useState('');
    const turn=useNavigate();
    const save = () => {
        //console.log(photo,sticker,placename)
       
        const formdata=new FormData()
        formdata.append('photo',photo)
        formdata.append('sticker',sticker)
        formdata.append('placename',placename)
        //console.log(formdata)
        axios.post("http://localhost/react_original_project/original/behind_scene/applications/destination_insert.php",formdata,{
            headers:{
                "Content-Type":"multipart/form-data"
            }
        })
        .then((res)=>{
            console.log(res.data)
            setPhoto('')
            setSticker('')
            setPlacename('')
            turn('/destination-list')
        })
       
       
    }
    return (

        <>
            <h1>Destination Entry Form</h1>
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
                            <label htmlFor="">Sticker</label>
                            <input type="text" onChange={(e) => setSticker(e.target.value)}  value={sticker} className="form-control" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group">
                            <label htmlFor="">Place Name</label>
                            <input type="text" onChange={(e) => setPlacename(e.target.value)}  value={placename} className="form-control" />
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <div className="card-footer">
                <button className="btn btn-md btn-primary" onClick={save}>Submit</button>
            </div>


        </>
    )
}
export default DestinationInsert;