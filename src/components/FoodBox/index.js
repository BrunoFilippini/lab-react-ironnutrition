import React, { useState } from 'react';

export function FoodBox({ foods }) {
  const [count, setCount] = useState(0);

  return (
    <>
      {foods.map((currentFood) => (
        <div class="columns">
          <div class="column">
            <div key={currentFood.name} className="box">
              <article className="media">
                <div className="media-left">
                  <figure className="image is-64x64">
                    <img src={currentFood.image} alt="food img" />
                  </figure>
                </div>
                <div className="media-content">
                  <div className="content">
                    <p>
                      <strong>{currentFood.name}</strong> <br />
                      <small>{currentFood.calories}</small>
                    </p>
                  </div>
                </div>
                <div className="media-right">
                  <div className="field has-addons">
                    <div className="control">
                      <input className="input" type="number" value={count} />
                    </div>
                    <div className="control">
                      <button
                        onClick={() => setCount(count + 1)}
                        className="button is-info"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
