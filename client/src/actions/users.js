import * as api from '../api'
import { setCurrentUser } from './currentUser'

export const fetchAllUsers = () => async (dispatch) => {
    try {
        const { data } = await api.getallusers()
        dispatch({ type: 'FETCH_USERS', payload: data})
    } catch (error) {
        console.log(error)
    }
}
export const updateProfile = (id, updateData) => async (dispatch) => {
    try{
        const { data } = await api.updateprofile(id, updateData)
        dispatch({ type: 'UPDATE_CURRENT_USER', payload: data })
    }catch(error){
        console.log(error)
    }
}

export const makeFriends = (id, value, token, button) => async (dispatch) => {
    try {
        const {data} = await api.makefriends(id, value, token)
        dispatch({ type: 'UPDATE_FRIENDS', payload: data})
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))))
        button()
    } catch (error) {
        console.log(error)
    }
}
