import PropTypes from 'prop-types';
import React from 'react';
import './Recomendados.css';

function RecomendadosDrinks({ imagem }) {
  return (
    <>
      {imagem && (
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className="rec-total">
                <div className="rec-separado">
                  <h5>{imagem[0].strMeal}</h5>
                  <img src={imagem[0].strMealThumb} alt={imagem[0].strMeal} />
                </div>
                <div className="rec-separado">
                  <h5>{imagem[1].strMeal}</h5>
                  <img src={imagem[1].strMealThumb} alt={imagem[1].strMeal} />
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div className="rec-total">
                <div className="rec-separado">
                  <h5>{imagem[2].strMeal}</h5>
                  <img src={imagem[2].strMealThumb} alt={imagem[2].strMeal} />
                </div>
                <div className="rec-separado">
                  <h5>{imagem[3].strMeal}</h5>
                  <img src={imagem[3].strMealThumb} alt={imagem[3].strMeal} />
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div className="rec-total">
                <div className="rec-separado">
                  <h5>{imagem[4].strMeal}</h5>
                  <img src={imagem[4].strMealThumb} alt={imagem[4].strMeal} />
                </div>
                <div className="rec-separado">
                  <h5>{imagem[5].strMeal}</h5>
                  <img src={imagem[5].strMealThumb} alt={imagem[5].strMeal} />
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="visually-hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-left-circle"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
                />
              </svg>
            </span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="visually-hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-right-circle"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                />
              </svg>
            </span>
          </button>
        </div>
      )}
    </>
  );
}

RecomendadosDrinks.propTypes = {
  id: PropTypes.string.isRequired,
  pagina: PropTypes.string.isRequired,
  ingredients: PropTypes.shape([]).isRequired,
};

export default RecomendadosDrinks;
