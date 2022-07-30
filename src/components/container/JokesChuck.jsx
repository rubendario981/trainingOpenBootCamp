import React, { useState, useEffect } from 'react'
import { getRandomJoke, getCategpryJoke } from '../services/ChuckService';
import Button from '@mui/material/Button';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';

const JokesChuck = () => {
    const [joke, setJoke] = useState({})
    const [likeJoke, setLikeJoke] = useState(0)
    const [dislikeJoke, setDislikeJoke] = useState(0)
    const [category, setCategory] = useState('')
    const categories = ["animal", "career", "celebrity", "dev", "explicit", "fashion", "food", "history", "money", "movie", "music", "political", "religion", "science", "sport", "travel"]

    useEffect(() => {
        randomJoke()
    }, [])

    const randomJoke = () => {
        getRandomJoke()
            .then((res) => setJoke(res))
            .catch((err) => console.log(`Something happend when try get ramdom joke ${err}`))
            .finally(()=> {
                setCategory('')
                document.getElementById('formJoke').reset()
            })
        }
        
        const categoryJoke = (e) => {
            e.preventDefault()
            getCategpryJoke(category)
            .then((res) => setJoke(res))
            .catch((err) => console.log(`Something happend when try get a joke random ${err}`))
            .finally(()=>{
                document.getElementById('formJoke').reset()
                setCategory('')
            })
    }

    const enjoyJoke = ()=> {
        setLikeJoke(likeJoke + 1)
        randomJoke()
    }
    
    const boreJoke = ()=> {
        setDislikeJoke(dislikeJoke + 1)
        randomJoke()
    }


    return (
        <div>
            <h2 className="bg-primary text-white text-center mt-5">The Chuck Norris's Jokes</h2>
            <div className="card m-auto w-100">
                <div className="d-flex">
                <img src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png" className="card-img-top w-25" alt="Chuck Norris cowboy" />
                <form className='w-75 mx-5 mt-4' id='formJoke' onSubmit={categoryJoke}>
                    <div className="form-floating mb-4">
                        <select id='selectJoke' className='form-select' name='level' defaultValue='' onChange={(e)=>setCategory(e.target.value)}>
                            <option value='' disabled hidden>Selecione una opcion</option>
                            {categories.map((cat, index) => (
                                <option key={index} value={cat}>{cat}</option>
                            ))}
                        </select>
                        <label htmlFor="selectLevel">Category</label>
                    </div>
                    <div className="d-flex justify-content-around">
                        <Button variant="contained" color='secondary' type='submit' disabled={!category}>
                            Get Joke of {category ? category : '...'}
                        </Button>
                        <Button variant="contained" color='info' onClick={randomJoke}>
                            Generate random Joke
                        </Button>
                    </div>
                </form>
                </div>
                <div className="card-body p-5">
                    <h5 className="card-title text-center">{joke.categories?.length > 0 ? `This Joke is about category of ${joke.categories.map(cat => cat)}`: 'This is a Joke Random... enjoy it' }</h5>
                    <p className="card-text">{joke.value}</p>
                    <p className="card-text">Created on: <small className="text-muted">{joke.created_at}</small></p>
                    <p className="card-text">Updated: <small className="text-muted">{joke.updated_at}</small></p>
                    <div className="d-flex justify-content-around">
                        <Button variant="contained" color='primary' startIcon={<ThumbUpIcon />} onClick={enjoyJoke}>
                            Like this joke
                        </Button>
                        <Button variant="contained" color='error' endIcon={<ThumbDownOffAltIcon />} onClick={boreJoke}>
                            Dislike this joke
                        </Button>
                    </div>
                    <div className="d-flex justify-content-around">
                        <h3>Good Jokes {likeJoke > 1 ? ` are ${likeJoke} jokes`: ` is ${likeJoke}`}</h3>
                        <h3>Bad Jokes {dislikeJoke > 1 ? ` are ${dislikeJoke} jokes`: ` is ${dislikeJoke}`}</h3>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default JokesChuck