import axios from 'axios';

const EditAdvertiseAction = (advertiseObj) => {
    return async function(dispatch) {
        const res = await axios.put(
            "http://localhost:8080/cgoas/advertise/update/id/" + advertiseObj.id,
            {
                title:advertiseObj.title,
                description:advertiseObj.description,
                price:advertiseObj.price
            },
            {
                "Content-type":"application.json; charset=UTF-8"
            }
        );
        console.log('Update Advertise serverResponse: ',res.data);
        dispatch({type: "EDIT_ADVERTISE",payload:res.data});
    }
}

export default EditAdvertiseAction;