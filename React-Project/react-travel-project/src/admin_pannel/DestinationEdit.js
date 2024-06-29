import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function DestinationEdit() {
    const [photo, setPhoto] = useState('');
    const [sticker, setSticker] = useState('');
    const [placename, setPlacename] = useState('');
    const { id } = useParams();
    const turn = useNavigate();
    useEffect(() => {
        axios.get(`http://localhost/react_original_project/original/behind_scene/applications/getDestination.php?id=${id}`)
            .then((res) => {
                setPhoto(res.data.photo)
                setSticker(res.data.sticker)
                setPlacename(res.data.place_name)
            })
    }, [])
    const save = () => {

        const formdata=new FormData()
        formdata.append('photo',photo)
        console.log(photo)
        formdata.append('sticker',sticker)
        formdata.append('placename',placename)
        formdata.append('id',id)
        console.log(id)
        axios.post("http://localhost/react_original_project/original/behind_scene/applications/destination_edit.php",formdata,{
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
            <h1>Destination Edit Form</h1>
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
                            <input type="text" onChange={(e) => setSticker(e.target.value)} value={sticker} className="form-control" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group">
                            <label htmlFor="">Place Name</label>
                            <input type="text" onChange={(e) => setPlacename(e.target.value)} value={placename} className="form-control" />
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <div className="card-footer">
                <button className="btn btn-md btn-primary" onClick={save}>Update</button>
            </div>


        </>
    )
}
export default DestinationEdit;