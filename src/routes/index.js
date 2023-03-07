import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddUser from '../feature/user/AddUser';
import UpdateUser from '../feature/user/UpdateUser';
import UserView from '../feature/user/UserView';
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';
import Error from '../pages/Error/Error';
import Home from '../pages/Home';

const Index = () => {
    return (
        <BrowserRouter>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/show-users" element={<UserView />} />
                    <Route path="/add-users" element={<AddUser />} />
                    <Route path="/edit-users" element={<UpdateUser />} />

                    <Route path="*" element={<Error />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    );
};

export default Index;
