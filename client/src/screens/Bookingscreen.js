import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Success from "../components/Success";

function Bookingscreen() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [room, setRoom] = useState(null);

  const { roomid } = useParams();

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        setLoading(true);

       
        const [data] = await Promise.all([
          axios.post("/api/rooms/getroombyid", { roomid: roomid }).then(res => res.data),
          new Promise(resolve => setTimeout(resolve, 1000)) 
        ]);

        setRoom(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        console.log(error);
        setLoading(false);
      }
    };
    fetchRoom();
  }, [roomid]);

  return (
    <div className="m-5">
      {loading ? (
        <Loader />
      ) : room ?  (
        <div>
          <div className="row justify-content-center mt-5 bs">
            <div className="col-md-5">
              <h1>{room.name}</h1>
              <img src={room.imageurls[0]} className="bigimg" alt={room.name} />
            </div>
            <div style={{textAlign: 'right'}} className="col-md-5">
              <h1>Booking Details</h1>
              <hr />
              <div>
                <b>
                  <p>Name: </p>
                  <p>From Date: </p>
                  <p>To Date: </p>
                  <p>Max Count: {room.maxcount}</p>
                  <p>Phone Number: {room.phonenumber}</p>
                  <p>Type: {room.type}</p>
                </b>
              </div>
              <div style={{textAlign: 'right'}}>
                <b>
                  <h1>Amount</h1>
                  <hr />
                  <p>Total Days: </p>
                  <p>Rent Per Day: {room.rentperday}</p>
                  <p>Total Amount: </p>
                </b>
              </div>
              <div style={{ float: 'right' }}>
                <button className="btn btn-primary">Pay Now</button>
              </div>
            </div>
          </div>
        </div>
      
      ) : (
        <Error />
      )}
    </div>
  );
}

export default Bookingscreen;