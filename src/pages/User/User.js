import React, { useEffect } from "react";
import { connectToProfile } from "../../service/Api";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../store/features/authSlice";
import "./User.css"
import { getUser } from "../../store/features/authSelector";

export default function User() {
    const dispatch = useDispatch();
    const user = useSelector(getUser);

    useEffect(() => {
        function getProfile() {
          connectToProfile()
            .then((response) => {
              const user = {
                firstName: response.data.body.firstName,
                lastName: response.data.body.lastName
              }
              dispatch(updateUser({ firstName: user.firstName, lastName: user.lastName }));
              console.log(response);
            })
            .catch((error) => {
              console.log(error);
            });
        }
    
        getProfile();
      }, [dispatch]);
    
    return (
        <div>
            <main className="main bg-dark">
                <div className="header">
                    <h1>Welcome back<br />{user.firstName} {user.lastName}</h1>
                    <button className="edit-button">Edit Name</button>
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