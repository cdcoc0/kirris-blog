import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AuthForm from '../../components/auth/AuthForm';
import { changeField, initializeForm, register } from '../../modules/auth';
import { check } from '../../modules/user';

const RegisterForm = ({history}) => {
    const dispatch = useDispatch();
    const {form, auth, authError, user} = useSelector(({auth, user}) => ({
        form: auth.register,
        auth: auth.auth,
        authError: auth.authError,
        user: user.user
    }));

    const onChange = e => {
        const {value, name} = e.target;
        dispatch(changeField({
            form: 'register',
            key: name,
            value,
        }));
    };

    const onSubmit = e => {
        e.preventDefault();
        const {username, password, passwordConfirm} = form;
        if(password !== passwordConfirm) {
            //오류 처리
            return;
        }
        dispatch(register({username, password}));
    }

    useEffect(() => {
        dispatch(initializeForm('register'));
    }, [dispatch]);

    useEffect(() => {
        if(authError) {
            console.log('authError occured');
            console.log(authError);
            return;
        }
        if(auth) {
            console.log('register succeeded');
            console.log(auth);
            dispatch(check());
        }
    }, [auth, authError, dispatch]);

    useEffect(() => {
        if(user) {
            console.log('check API succeeded');
            console.log(user);
            history.push('/');
        }
    }, [user, history]);

    return (
        <AuthForm type="register" form={form} onChange={onChange} onSubmit={onSubmit} />
    );
};

export default withRouter(RegisterForm);