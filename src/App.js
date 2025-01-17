import './App.css';
import IdCard from "./components/IdCard";
import Greetings from "./components/Greetings";
import Random from "./components/Random";
import BoxColor from "./components/BoxColor";
import CreditCard from "./components/CreditCard";
import Rating from "./components/Rating";
import DriverCard from "./components/DriverCard";
import Visa from './assets/images/visa.png';

function App() {
  return (
    <div className="App">
      <h1>IdCard</h1>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height="178"
        birth={`${new Date("1992-07-14")}`}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName="Delores"
        firstName="Obrien"
        gender="female"
        height="172"
        birth={`${new Date("1988-05-11")}`}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <h1>Greetings</h1>
      <Greetings lang="en" name='Francesco' />
      <Greetings lang="de" name='Maria' />
      <Greetings lang="fr" name='Lucia' />
      <Greetings lang="es" name='Martín' />
      <h1>Random</h1>
      <Random min="2" max="7" />
      <Random min="1" max="3" />
      <Random min="5" max="10" />
      <h1>Box color</h1>
      <BoxColor r={128} g={255} b={0} />
      <BoxColor r={324} g={235} b={0} />
      <h1>Credit card</h1>
      <CreditCard
        image={Visa}
        bank="BNP"
        number="•••• •••• •••• 8845"
        expirationMonth={3}
        expirationYear={21}
        owner="Maxence Bouret"
        bgColor="rgb(17, 170, 153)"
        color="white"
      />
      <h1>Rating</h1>
      <Rating rating={0} />
      <Rating rating={1.4} />
      <Rating rating={2} />
      <Rating rating={3.4} />
      <Rating rating={4.5} />
      <Rating rating={5} />
      <h1>Driver Card</h1>
      <DriverCard
        name="Travis Kalanick"
        rating={3.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE"
        }}
      />
      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: "Audi A3",
          licensePlate: "BE33ER"
        }}
      />
    </div>
  );
}

export default App;