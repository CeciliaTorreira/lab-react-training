//import logo from './logo.svg';
import './App.css';
import Greetings from './components/Greetings';
import IdCard from './components/IdCard';

function App() {
  return (
    <div className="App">

    <div>
   <h3>ID CARDS</h3>
  <IdCard 
    firstName='Cecilia'
    lastName="Torreira"
    gender="female"
    height={149}
    birth={new Date("1992-04-22")}
    picture="https://static.wikia.nocookie.net/gensin-impact/images/9/9b/Item_Cecilia.png/revision/latest?cb=20210109070744"
    />

<IdCard
  lastName='Doe'
  firstName='John'
  gender='male'
  height={178}
  birth={new Date("1992-07-14")}
  picture="https://randomuser.me/api/portraits/men/44.jpg"
/>

<IdCard
  lastName='Delores '
  firstName='Obrien'
  gender='female'
  height={172}
  birth={new Date("1988-05-11")}
  picture="https://randomuser.me/api/portraits/women/44.jpg"
/>
  
   </div>

  <div>
    <Greetings lang="en"/>
    <Greetings lang="es"/>
    <Greetings lang="fr"/>
  </div>

    </div>
  );
}

export default App;
