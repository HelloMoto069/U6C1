import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const SingleMovieDetails = () => {
  const { productId } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    axios({
      method: "get",
      url: `https://movie-fake-server.herokuapp.com/data/${productId}`
    })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [productId]);

  // make a request to get the details
  return (
    <>
         <h1>SinglePage</h1>
         {data && <> <h2>{data.movie_name}</h2>
               <img src= {data.image_url}/>
         
               <h3> {data.release_date} </h3>
               <h3> {data.rating} </h3>
               <h3> {data.genre} </h3>
         </>}
    </>
    )
  }
