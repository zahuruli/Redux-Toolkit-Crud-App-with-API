import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateUser } from './userSlice';

const UpdateUser = () => {
    const location = useLocation();

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [id, setId] = useState(location.state.id || '');
    const [name, setName] = useState(location.state.name || '');
    const [desc, setDesc] = useState(location.state.desc || '');
    const [active, setActive] = useState(location.state.active || '');

    const user = { name: name, desc: desc, active: active };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUser({ id, user }));
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

                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default UpdateUser;
