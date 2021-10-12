import React from 'react'
import { useState } from 'react/cjs/react.development'
import axios from 'axios';

const AddUser = () => {

    const [user, setUser]=useState({});
    
    return (
        <div>
            <h1 className="title">Add User</h1>
            <form className="form" onSubmit={(e)=>{
                e.preventDefault()
                console.log(user)
                axios.post("https://www.webappfactory.co/shaktipeeth/public/api/add-user", user)
                .then((res)=>{
                    if(res.status===200){
                        alert("Data added")
                    }
                })
                .catch(err=>console.error(err))
            }}>
                    <ul>
                <label>
                    Name:
                    <input type="text"
                     value={user.name}
                    onChange={(e)=>{setUser({...user, name: e.target.value})}}
                    name="name" />
                </label>
                </ul>
                <ul>
                <label>
                    Email:
                    <input type="email" 
                    value={user.email}
                    onChange={(e)=>{setUser({...user, email: e.target.value})}}
                    name="email" />
                </label>
                </ul>
                <ul>
                <label>
                    Phone:
                    <input type="number" 
                    value={user.phone}
                    onChange={(e)=>{setUser({...user, phone: e.target.value})}}
                     name="phone" />
                </label>
                </ul>
                <ul>
                <label>
                    User:
                    <input type="text"
                     value={user.username}
                     onChange={(e)=>{setUser({...user, username: e.target.value})}}
                     name="username" />
                </label>
                </ul>
                <ul>
                <label>
                    Street:
                    <input type="text"
                    value={user.Street_address}
                    onChange={(e)=>{setUser({...user, Street_address: e.target.value})}}
                     name="street_address" />
                </label>
                </ul>
                <ul>
                <label>
                    City:
                    <input type="text"
                     value={user.city_name}
                     onChange={(e)=>{setUser({...user, city_name: e.target.value})}}
                     name="city_name" />
                </label>
                </ul>
                <ul>
                <label>
                    Country:
                    <input type="text" 
                    value={user.country_name}
                    onChange={(e)=>{setUser({...user, country_name: e.target.value})}}
                    name="country_name" />
                </label>
                </ul>
                <ul>
                <label>
                    State:
                    <input type="text" 
                    value={user.state_name} 
                    onChange={(e)=>{setUser({...user, state_name: e.target.value})}}
                    name="state_name" />
                </label>
                </ul>
                <ul> 
                <label>
                    Pin :
                    <input type="Number"
                     value={user.pin_code}
                     onChange={(e)=>{setUser({...user, pin_code: e.target.value})}}
                     name="pin_code" />
                </label>
                </ul>
                <ul>
                <label>
                    Status:
                    <select name="status"
                    onChange={(e)=>{setUser({...user, status: e.target.value})}}
                    value={user.status}>
                        <option value="Active">active</option>
                        <option value="InActive">in-active</option>
                    </select>
                </label>
                </ul>
                <ul>
                <input type="submit" value="Add User"/>
                </ul>
            </form>
        </div>
    )
}

export default AddUser
