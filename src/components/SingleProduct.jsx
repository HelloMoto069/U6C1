import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const SingleProductList = () => {
  const { productId } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    axios({
      method: "get",
      url: `https://movie-fake-server.herokuapp.com/products/${productId}`
    })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
      console.log(data)
  }, [productId]);

  // make a request to get the details
  return (
    <>
         <h1>SinglePage</h1>
         {data && <> <h2>{data.title}</h2>
               <img src= {data.image}/>
         
               <h3> {data.brand} </h3>
               <h3> {data.price} </h3>
         </>}
    </>
    )
  }

