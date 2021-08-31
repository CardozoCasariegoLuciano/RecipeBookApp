import React, { useState } from "react";
import "./aboutUs.scss";
import foto1 from "../../statics/photos/Me01.jpg";
import foto2 from "../../statics/photos/Me02.jpg";

const AboutAs = () => {
  const [photo, setPhoto] = useState(true);

  return (
    <div className="aboutUs">
      <div className="content">
        <div className="aboutApp">
          <h3>Libro de recetas</h3>
          <p>
            Esta aplicacion fue creada el xx-xx-xxxx con el fin de bla bla bla
          </p>
          <p>fue construida en React.js</p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
            alias voluptatem excepturi obcaecati dolor, dolore esse quaerat cum
            quae maxime nihil aspernatur molestiae totam repellendus illo vitae.
            Ipsam doloremque dignissimos a possimus iusto ut fugit distinctio,
            ad voluptate eligendi error optio odio aliquid tempora eum harum
            omnis quo adipisci? Nihil animi odit possimus saepe ratione dolores
            voluptatum harum vitae nostrum rerum, cupiditate obcaecati alias
            modi provident quo, architecto autem accusantium iste tempore id
            nobis voluptatem cum corporis iure. Provident molestias reiciendis
            sapiente. Consequatur non maiores animi quos cum nostrum, dolore
            omnis doloremque reiciendis incidunt corporis iure reprehenderit
            sequi asperiores quis.
          </p>
        </div>

        <div className="aboutMe">
          <div className="aboutMe_grid">
            <div className="imagenes">
              <h3>Quien soy?</h3>
              {photo ? (
                <img className="photos photo1" src={foto1} alt="Me" />
              ) : (
                <img className="photos photo2" src={foto2} alt="Me" />
              )}
              <button onClick={() => setPhoto(!photo)}>
                {" "}
                {photo ? "Con pelo corto" : "Con pelo largo"}{" "}
              </button>
            </div>
            <div className="aboutMe-text">
              <p>
                Me llamo Luciano, cuando comence con este proyecto tenia 23
                años, estudie en la Univercidad Nacional de Quilmes
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad,
                fugiat temporibus inventore, hic distinctio suscipit, aperiam
                voluptas quo quia a aut nulla! Sed nobis accusamus mollitia
                ipsum at tempora accusantium temporibus voluptate quae debitis,
                corrupti explicabo veniam distinctio eius nihil laudantium animi
                consequuntur ex! Possimus magni eveniet recusandae corrupti
                similique nesciunt placeat ullam eos officia qui ex provident
                itaque autem ratione, reprehenderit dolore unde amet id sint.
                Autem sequi incidunt ut nihil earum quaerat, animi nostrum
                atque, maxime a impedit accusamus? Eum perferendis dignissimos
                laudantium iure minima modi nam dolor voluptatibus, error ex,
                iusto illum commodi. Esse quae perferendis cupiditate?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAs;
