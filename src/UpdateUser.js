import React from 'react';
import { updateUser } from './apis';

const UpdateUser = ({user, setUser}) => {

    return (
        <div>
            <form className="updateForm" onSubmit={(e)=>{
                e.preventDefault();
                updateUser(user)
                .then(res=>{
                    if(res.status===200){
                        alert(`User with id: ${user.id} updated`)
                    }
                })
                .catch(err=>{
                    console.log(err)
                    alert('some error occured')})

            }} >
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
                    Country:
                    <input type="text" 
                    value={user.country_name}
                    onChange={(e)=>{setUser({...user, country_name: e.target.value})}}
                    name="country_name" />
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
                <input type="submit" value="Update User"/>
                </ul>
            </form>
        </div>
    )
}

export default UpdateUser
