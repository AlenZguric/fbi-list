import { useEffect, useState } from 'react'
import axios from 'axios'

import"../src/FetchApiComponent.css"

const FetchApi = () => {

    const [data, setData]= useState([])

    useEffect(() =>{
        axios.get("https://api.fbi.gov/wanted/v1/list")
        .then((response) => {
            setData(response.data.items)
            console.log(response.data.items)
        })
        .catch((error) => {
            console.log(error)
        })

    },[])

  return (
    <div className='fbi-page'>
        <h1>FBI WANTED</h1>
        <div className="container">
           <ul>
           {data.map((item)=>(
               <li key={item.uid}>
                <img src={item.images[0]?.thumb} alt={item.title} />
                <h2>{item.title}</h2>
                {(item.dates_of_birth_used) && (<p>DOB: {item.dates_of_birth_used}</p>)}
                <p>{item.description}</p>
                <p>Boja kose {item.hair}</p>
               </li> 
            ))}
           </ul>
        </div>
    </div>
  )
}

export default FetchApi