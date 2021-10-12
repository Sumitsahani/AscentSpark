import React from 'react'
import { getAllUser } from './apis'
import { useEffect } from 'react'
import { useState } from 'react/cjs/react.development'
import { Button ,Modal } from 'react-bootstrap'
import UpdateUser from './UpdateUser'

const UserList = () => {

    const [users, setUsers] = useState([]);
    const [show, setShow] = useState(false);
    const [userData, setUserData] = useState({});

    const handleShow = (user) => {
        setShow(true);
        setUserData(user);
    }

    const hide = () => {
        setShow(false, ()=>console.log(show));
    }

    useEffect(() => {
        getAllUser()
            .then((res) => {
                console.log(res)
                if (res.status === 200) {
                    console.log('a')
                    setUsers([...users, ...res.data.data.data]);
                }
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <div>
            <table style={{ border: '1px solid' }}>
                <thead>
                    <tr className="title">
                        <th>ID</th>
                        <th>Name</th>
                        <th>Emaiil</th>
                        <th>Phone</th>
                        <th>Is Verified</th>
                        <th>Street Name</th>
                        <th>Country Name</th>
                        <th>Pin Code</th>
                        <th>State Name</th>
                        <th>Status</th>
                        <th>User Name</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        users.length > 0 && users.map((user) => <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.is_verfied}</td>
                            <td>{user.street_address}</td>
                            <td>{user.country_name}</td>
                            <td>{user.pin_code}</td>
                            <td>{user.state_name}</td>
                            <td>{user.status}</td>
                            <td>{user.username}</td>
                            <td>
                                <button onClick={()=>{handleShow(user)}} >Edit</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
            {console.log(show)}
            {show&&<div className="Modal"><Modal.Dialog  >
                <Modal.Header >
                    <Modal.Title>Edit</Modal.Title>
                    <button onClick={hide}>x</button>
                </Modal.Header>
                <Modal.Body>
                   <UpdateUser user={userData} setUser={setUserData} />
                </Modal.Body>
            </Modal.Dialog></div>}
        </div>
    )
}

export default UserList

