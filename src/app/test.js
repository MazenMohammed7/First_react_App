"use client"
import React, { useEffect, useState } from "react"
import Index from "./components/index"


export default function Test(){
  const [data , sn ] = useState([])
  const datashow = data.map((irem)=> 
    <Index name={irem.name}/>)
 useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => sn(data.map(itme => itme.name)))
    }, [])
    
  return  (

  <>
    {datashow}
</>)
}