import axios from "axios"
const URL = 'https://api.chucknorris.io/'

export const getRandomJoke = async ()=>{
    try {
        let res = await axios.get(`${URL}jokes/random`)
        return res.data
        
    } catch (error) {
        console.error(error)
    }
}

export const getCategpryJoke = async (category)=>{
    try {
        let res = await axios.get(`${URL}jokes/random?category=${category}`)
        return res.data
        
    } catch (error) {
        console.error(error)
        
    }
}
