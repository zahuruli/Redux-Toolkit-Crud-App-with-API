import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { postUser } from './userSlice';

const AddUser = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [active, setActive] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = { name: name, desc: desc, active: active };
        console.log(newUser);
        dispatch(postUser(newUser));
        navigate('/show-users', { replace: true });
    };
    return (
        <div>
            <h1>Add User</h1>
            <form onSubmit={handleSubmit} className="form" method="post">
                <div className="form-field">
                    <label htmlFor="name">Name : </label>
                    <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="form">
                    <label htmlFor="desc"> Desc : </label>
                    <input type="text" id="desc" name="desc" value={desc} onChange={(e) => setDesc(e.target.value)} required />
                </div>
                <div className="form-field">
                    <label htmlFor="active">Active : </label>
                    <input type="text" id="active" name="active" value={active} onChange={(e) => setActive(e.target.value)} required />
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddUser;
