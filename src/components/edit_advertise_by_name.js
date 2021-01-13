/* import {useRef} from 'react';
import {useDispatch} from 'react-redux';
import EditAdvertiseAction from '../actions/edit_advertise_by_name_action';
import {Button} from 'react-bootstrap';

let advertiseIdRef;
let advertiseTitleRef;
let advertiseDescriptionRef;
let advertisePriceRef;
let dispatch;

const EditAdvertiseComponent = (props) => {
    advertiseIdRef = useRef(null);
    advertiseTitleRef = useRef(null);
    advertiseDescriptionRef = useRef(null);
    advertisePriceRef = useRef(null);
    dispatch = useDispatch();

    return(
        <div>
            <h1><center>Edit Advertise</center></h1>
            <h3>
                Advertise id:<input type="text" readOnly={true} ref={advertiseIdRef} value={props.advertise.id}></input><br></br><br></br>
                Advertise title:<input type="text" ref={advertiseTitleRef} value={props.advertise.title}></input><br></br><br></br>
                Advertise description:<textarea ref={advertiseDescriptionRef} value={props.advertise.description}></textarea><br></br><br></br>
                Price:<input type="text" ref={advertisePriceRef} value={props.advertise.price}></input><br></br><br></br>
                <button className="btn btn-info shadow-none" value="UPDATE" onClick={editAdvertise.bind(this,props)}><span className="glyphicon glyphicon-edit" aria-hidden="true" title="Update advertise"></span>Update</button>
                <button className="btn btn-danger shadow-none" value="CANCEL" onClick={props.renderAddProductForm.bind(this)}><span className="glyphicon glyphicon-remove" aria-hidden="true" title="Cancel"></span>Cancel</button>
            </h3>
        </div>
    );
}

function editAdvertise(props){
    console.log('Update Advertise: ',props.advertise);
    props.advertise.id = advertiseIdRef.current.value;
    props.advertise.title = advertiseTitleRef.current.value;
    props.advertise.description = advertiseDescriptionRef.current.value;
    props.advertise.price = advertisePriceRef.current.value;
    dispatch(EditAdvertiseAction(props.advertise)).then((response) => {
        props.renderAddProductForm();
    })
}

export default EditAdvertiseComponent; */