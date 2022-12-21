import React, { useEffect, useState } from 'react'

const Data = () => {
    const [users, setUsers] = useState([]);
    const getUsers = async () => {

        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        setUsers(await response.json());

        // const data// 
        //  =(await response.json()); for  show in console
        // console.log(data);

    }

    useEffect(() => {
        getUsers();
    }, []);
    return (
        <>
            <div>
                <h2>The List</h2>
            </div>
            <div className='container'>
                <div className='row'>
                    {
                        users.map((curElem) => {
                            return (

                                <div>
                                    <div className='col'>
                                        <div className='card'>
                                            <div className='flrx'>
                                            <span className='s'><p>{curElem.name}</p></span>
                                                <div className='image'> <img src="" class='rounded' width='155' alt="" />
                                                    <h4>ImageData</h4>
                                                    <div className='city'><h4>{curElem.username}</h4></div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </>
    )
}


export default Data