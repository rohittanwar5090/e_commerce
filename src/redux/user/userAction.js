export const currentUserAction = user =>{    
    return{
        type: 'SET_CURRENT_USER',
        payload : user
    }   
}