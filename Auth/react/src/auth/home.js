import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';




const Home = (props) => {

    const [json,setJson] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/api/getAll',{
            headers :{'auth' : `${JSON.parse(localStorage.getItem('auth'))}`}
        })
      .then(res =>{
          setJson(res.data);
      })
      .catch(err =>{

      })
    })
    return(
        <div>
        <p>{JSON.stringify(json)}</p>
        <button onClick = {() => {
        localStorage.clear();
        props.history.push('/login'); 
        }} className="btn btn-primary" >Logout</button>
        </div>
    )
}

export default Home;