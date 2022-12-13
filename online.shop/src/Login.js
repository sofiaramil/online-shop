import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Login.css';
import { auth } from './config/firebase';

const Form = (prop) => {
  const { option } = prop;
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState(null);
  const [resetAlert, setResetAlert] = useState('');

  const validateEmail = () => {
    const pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    return pattern.test(String(email).toLowerCase());
  };

  useEffect(() => {
    if (validateEmail(email) && password.length > 5) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, password]);

  useEffect(() => {
    setError('');
  }, []);

  const signIn = async (e) => {
    e.preventDefault();
    try {
      if (validateEmail(email) && password.length > 5) {
        setDisabled(false);
        await auth.signInWithEmailAndPassword(email, password);
        await history.push('/');
      } else {
        setDisabled(true);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const register = async (e) => {
    e.preventDefault();
    try {
      if (validateEmail(email) && password.length > 5 && repeatPassword.length > 5) {
        setDisabled(false);
        await auth.createUserWithEmailAndPassword(email, password);
        await history.push('/');
      } else {
        setDisabled(true);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const resetPassword = async (e) => {
    e.preventDefault();
    try {
      auth.sendPasswordResetEmail(email).then(setResetAlert(`Please check your ${email} email...`));
    } catch (err) {
      setError(err.message);
    }
  };
  const selectActionOnSubmit = (e) => {
    if (option === 1) {
      signIn(e);
    } else if (option === 2) {
      register(e);
    } else {
      resetPassword(e);
    }
  };

  return (
    <div className="login-form-wrapper">
      <form className="account-form" onSubmit={(e) => e.preventDefault()}>
        <div
          className={`account-form-fields ${
            option === 1 ? 'sign-in' : option === 2 ? 'sign-up' : 'forgot'
          }`}
        >
          <label className="login-form-label" htmlFor="email">
            E-mail
            <input
              id="email"
              className="login-input"
              name="email"
              type="email"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </label>

          <label className="login-form-label" htmlFor="password">
            Пароль
            <input
              id="password"
              className="login-input"
              name="password"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required={!!(option === 1 || option === 2)}
              disabled={option === 3}
            />
          </label>
          <label className="login-form-label" htmlFor="password">
            Повторите пароль
            <input
              id="repeat-password"
              name="repeat-password"
              type="password"
              className="login-input"
              placeholder="Repeat password"
              onChange={(e) => setRepeatPassword(e.target.value)}
              required={option === 2}
              disabled={!!(option === 1 || option === 3)}
            />
          </label>
        </div>
        <button
          disabled={disabled && option !== 3}
          className={!disabled ? 'signIn-button' : 'signIn-button disabled'}
          onClick={(e) => selectActionOnSubmit(e)}
          type="submit"
        >
          {option === 1 ? 'Sign in' : option === 2 ? 'Sign up' : 'Reset password'}
        </button>
      </form>
      {resetAlert && option === 3 && <h3>{`${resetAlert}`}</h3>}
      <p>Выполняя вход, вы соглашаетесь с Условиями использования КРОССЫ.</p>
      {error ? <p className="error-fbs">{`Something went wrong: ${error}`}</p> : null}
    </div>
  );
};

const Login = () => {
  const [option, setOption] = useState(1);

  return (
    <div className="login-wrapper">
      <Link to="/">
        <img
          className="login-logo"
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fdamion.club%2F41213-narisovannye-krossovki.html&psig=AOvVaw1U-ktZdUQYGYCChMXkjDzx&ust=1671006595715000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLia7uaW9vsCFQAAAAAdAAAAABAE"
          alt="logo"
        />
      </Link>

      <div className="container">
        <header>
          <div
            className={`header-headings ${
              option === 1 ? 'sign-in' : option === 2 ? 'sign-up' : 'forgot'
            }`}
          >
            <span>Войти в свой аккаунт</span>
            <span>Создать аккаунт</span>
            <span>Сбросить пароль</span>
          </div>
        </header>
        <ul className="options">
          <li className={option === 1 ? 'active' : ''} onClick={() => setOption(1)}>
          Войти
          </li>
          <li className={option === 2 ? 'active' : ''} onClick={() => setOption(2)}>
            Зарегистрироваться
          </li>
          <li className={option === 3 ? 'active' : ''} onClick={() => setOption(3)}>
            Забыли пароль?
          </li>
        </ul>
        <Form option={option} />
      </div>
    </div>
  );
};

export default Login;