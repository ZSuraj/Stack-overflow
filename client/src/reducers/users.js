const usersReducer = (states = [], action) => {
    switch (action.type) {
        case 'FETCH_USERS':
            return action.payload;    
        case 'UPDATE_CURRENT_USER':
            return states.map((state) => state._id === action.payload._id ? action.payload : state)
        case 'UPDATE_FRIENDS':
            localStorage.setItem("Profile", JSON.stringify({ ...action?.payload }))
            return { ...states, data: action?.payload}
        default:
            return states;
    }
}

export default usersReducer;