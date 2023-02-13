import React from "react";

const menuCard = ({ menuData }) => {
  console.log("menuData :>> ", menuData);
  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((currentElement) => {
          return (
            <>
              <div className="card-container" key={currentElement.id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">
                      {currentElement.id}
                    </span>
                    <span
                      className="card-author subtle"
                      style={{ color: "red" }}
                    >
                      {currentElement.name}
                    </span>
                    <h2 className="card-title">{currentElement.name}</h2>
                    <span className="card-description subtle">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Ratione numquam, optio maxime aut saepe voluptatem.
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img
                    src={currentElement.image}
                    alt="images"
                    className="card-media"
                  />
                  <span className="card-tag subtle">Order Now</span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default menuCard;
