import "./App.css";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = { color: "red", fontSize: "48px" };
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;
  console.log(numPizzas);
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      {/* conditional rendering */}
      {numPizzas > 0 ? (
        //React fragments <React.fragments> import react to work
        <>
          <p>
            Authentic Italian Pizzas. 6 creative dishes to choose from. All from
            our stone oven,all organic, all delicious
          </p>
          <ul className="pizzas">
            {/* Rendering list */}
            {pizzas.map((pizza) => {
              return <Pizza pizzaObj={pizza} key={pizza.name} />;
            })}
          </ul>
        </>
      ) : (
        <p>We are still working on menu. Please come back later:)</p>
      )}
      {/* <Pizza
        name="Pizza Salamino"
        ingredients="Tomato, mozarella, and pepperoni"
        photoName="pizzas/salamino.jpg"
        altPhoto="Pizza Salamino"
        price={10}
      />
      <Pizza
        name="Pizza Prosciutto"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        photoName="pizzas/prosciutto.jpg"
        altPhoto="Pizza Prosciutto"
        price={18}
      /> */}
    </div>
  );
}

function Pizza({ pizzaObj }) {
  //destructring props to {pizzaObj}
  console.log(pizzaObj);
  // Multiple returns
  // if (pizzaObj.soldOut) return null;
  return (
    // Conditional class property
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.photoName}></img>
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        {/* conditional text */}
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  // if (hour >= openHour && hour <= closeHour) {
  //   alert("We are Open!");
  // } else alert("We are closd");
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We are happy to serve you between {openHour}:00 and {closeHour}:00
        </p>
      )}
      {/* <h2>{new Date().toLocaleDateString()} We are now open!</h2> */}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00.Come visit us or order
        online
      </p>
      <button className="btn">Order Now</button>
    </div>
  );
}

export default App;
