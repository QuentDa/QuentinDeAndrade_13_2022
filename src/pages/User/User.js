import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { connectToProfile, editProfile } from "../../service/Api";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../store/features/authSlice";
import "./User.css"
import { getUser } from "../../store/features/authSelector";

export default function User() {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    useEffect(() => {
        if (!token) {
            navigate('/');
        }
    }, [navigate, token]);

    const dispatch = useDispatch();
    const user = useSelector(getUser);
    const [isEditing, setIsEditing] = useState(false);
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);

    useEffect(() => {
        function getProfile() {
            connectToProfile()
                .then((response) => {
                    const user = {
                        firstName: response.data.body.firstName,
                        lastName: response.data.body.lastName
                    }
                    dispatch(updateUser({ firstName: user.firstName, lastName: user.lastName }));
                })
                .catch((error) => {
                    console.log(error);
                });
        }

        getProfile();
    }, [dispatch]);

    function handleEdit() {
        setFirstName(user.firstName);
        setLastName(user.lastName);
        setIsEditing(true);
    }
    function handleSave() {
        const data = {
            firstName: firstName,
            lastName: lastName
        }
        editProfile(data);
        dispatch(updateUser(data));
        setIsEditing(false);
    }

    return (
        <div>
            <main className="main bg-dark">
                <div className="header">
                    <div className="header_profile_infos">
                        {isEditing ? (
                            <div className="edit-form">
                                <h1>
                                    Welcome back<br />
                                </h1>
                                <input type="text" placeholder="First Name" value={firstName} onChange={
                                    (e) => {
                                        setFirstName(e.target.value);
                                    }
                                } 
                                />
                                <input type="text" placeholder="Last Name" value={lastName} onChange={
                                    (e) => {
                                        setLastName(e.target.value);
                                    }
                                } 
                                />
                                <br />
                                <button className="save-button" onClick={handleSave}>Save</button>
                                <button className="cancel-button" onClick={() => setIsEditing(false)}>Cancel</button>
                            </div>
                        ) : (
                            <>
                                <h1>
                                    Welcome back<br />
                                    {user.firstName} {user.lastName}
                                </h1>
                                <button onClick={handleEdit} className="edit-button">Edit Name</button>
                            </>
                        )}
                    </div>
                </div>
                <h2 className="sr-only">Accounts</h2>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                        <p className="account-amount">$2,082.79</p>
                        <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                        <p className="account-amount">$10,928.42</p>
                        <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                        <p className="account-amount">$184.30</p>
                        <p className="account-amount-description">Current Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
            </main>
        </div>
    );
}