const initialState = [];
const advertiseReducer = (state = initialState, action) => {
    switch(action.type){
        case 'GET_ADVERTISES':
            return action.payload;
       /*  case 'EDIT_ADVERTISE':
            return state; */
    }
}

export default advertiseReducer;