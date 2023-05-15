import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import "./signin and signout.styles.css";


const SignInAndSignOutPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
        </div>
);

export default SignInAndSignOutPage;