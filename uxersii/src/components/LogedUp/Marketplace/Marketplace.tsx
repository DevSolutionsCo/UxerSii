import "./stylemarcketplace.css"



function Marketplace() {
  return (
    <section>
      <h2>Productos</h2>
      <div className="pro-conten shadow-xl shadow-black">
        <div className="prod">
          <img
            src="https://statics-cuidateplus.marca.com/cms/platanos_0.jpg"
            alt="Producto"
            className="w-44 h-60 img-prod"
          />
          <div className="desc">
            <span>Tiempo de caducidad</span>
            <h5>Platanito</h5>
            <span>120kg</span>
            <h4>$120</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Marketplace;
