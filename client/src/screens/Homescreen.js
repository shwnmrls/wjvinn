import React, { useState, useEffect } from 'react'
import axios from 'axios' 
import Room from '../components/Room'
import Loader from '../components/Loader'
import Error from '../components/Error'

function Homescreen() {

    const [rooms, setRooms] = useState([])
    const [loading, setLoading] = useState(true) 
    const [error, setError] = useState(false)      

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                setLoading(true)

                
                const [data] = await Promise.all([
                    axios.get('/api/rooms/getallrooms').then(res => res.data),
                    new Promise(resolve => setTimeout(resolve, 1000))
                ])

                setRooms(data)
                setLoading(false)
            } catch (error) {
                setError(true)
                console.log(error)
                setLoading(false)
            }
        }

        fetchRooms()
    }, [])

    return (
        <div className='container'>
            <div className="row justify-content-center mt-5">
                {loading ? (
                    <Loader />
                ) : rooms.length > 1 ? (
                     rooms.map((room) => (
                        <div className="col-md-9 mt-2" key={room._id}>  
                            <Room room={room} />
                        </div>
                     ))
                ) : (
                   <Error />
                )}
            </div>  
        </div>
    );
}

export default Homescreen