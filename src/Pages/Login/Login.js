import PropTypes from 'prop-types';
import React, { useState } from 'react';
import barbecue from '../../images/barbecue.gif';
import './Login.css';

function Login({ history }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const btnCheck = () => {
    const regexValidation = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    // Referência do Regex: https://regexr.com/3e48o
    const minSenha = 7;

    if (senha.length >= minSenha && regexValidation.test(email)) {
      return false;
    } return true;
  };

  const onButton = () => {
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify({ email }));
    history.push('/foods');
  };

  return (
    <div className="main-login">
      <section className="left-login">
        <div className="card-descrition">
          <h1 className='h1-login'>
            <center>
              Faça o login e aprenda a programar uma deliciosa receita
            </center>
          </h1>
          {/* imagem retirada do site https://storyset.com/illustration/barbecue/amico */}
          <img src={ barbecue } alt="" className="img-login" />
        </div>
      </section>

      <section className="right-login">
        <div className="card-login">
          <label htmlFor="email-login" className="textfield">
            <p> E-mail: </p>
            <input
              type="text"
              id="email-login"
              name="email"
              data-testid="email-input"
              value={ email }
              onChange={ ({ target }) => setEmail(target.value) }
            />
          </label>

          <label htmlFor="email-login" className="textfield">
            Senha:
            <input
              type="password"
              id="senha-login"
              name="senha"
              data-testid="password-input"
              value={ senha }
              onChange={ ({ target }) => setSenha(target.value) }
            />
          </label>
          <button
            className="btn-login"
            type="button"
            data-testid="login-submit-btn"
            disabled={ btnCheck() }
            onClick={ () => onButton() }
          >
            Enter
          </button>

        </div>
      </section>
    </div>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Login;
