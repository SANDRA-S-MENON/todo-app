import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewWork = () => {
    const [data,changeData]=useState([])
    const fetchData=()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">userId</th>
                                    <th scope="col">id</th>
                                    <th scope="col">title</th>
                                    
                                </tr>
                            </thead>
                            

                            {data.map(
                                (value, index) => {
                                    return <tbody>
                                    <tr>
                                        <td>{value.userId}</td>
                                        <td>{value.id}</td>
                                        <td>{value.title}</td>
                                    </tr>
                                    
    
    
                                    
                                </tbody>
                                }
                            )

                            }
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewWork