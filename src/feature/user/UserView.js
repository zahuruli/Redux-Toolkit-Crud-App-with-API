import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser, getAllUser } from './userSlice';

const UserView = () => {
    const dispatch = useDispatch();
    const { isLoading, users, error } = useSelector((state) => state.userReducer);

    useEffect(() => {
        dispatch(getAllUser());
    }, []);

    const handleDelete = (id) => {
        dispatch(deleteUser(id));
    };

    return (
        <div>
            {isLoading && <h1>Data is Loading...</h1>}
            {error && <h2>{error}</h2>}
            <section className="Article-section">
                {users &&
                    users.map((user) => {
                        const { id, name, desc, active } = user;
                        return (
                            <article key={id} className={'article'}>
                                <h2>Name: {name}</h2>
                                <h3>desc: {desc}</h3>
                                <h3>Active: {active}</h3>
                                <div className="btn-holder">
                                    <button onClick={() => handleDelete(id)} className="btn">
                                        Delete
                                    </button>
                                    <Link to={'/edit-users'} state={{ id, name, desc, active }}>
                                        <button className="btn">Update</button>
                                    </Link>
                                </div>
                            </article>
                        );
                    })}
            </section>
        </div>
    );
};

export default UserView;
