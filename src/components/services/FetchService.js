const URL = 'https://reqres.in/api/'
export const getAllUsers = async ()=>{
    let response = await fetch(`${URL}users`)
    return response.json()
}
export const getAllUsersPage = async (page)=>{
    let response = await fetch(`${URL}users?page=${page}`)
    return response.json()
}
export const getNumberPages = async ()=>{
    let response = await fetch(`${URL}users`)
    return response.json()
}