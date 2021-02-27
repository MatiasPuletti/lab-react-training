import React from 'react';
import './App.css';
import { IdCard } from './components/IdCard/IdCard';
import { Greetings } from './components/Greetings/Greetings';
import { Random } from './components/Random/Random';
import { BoxColor } from './components/BoxColor/BoxColor';
import { CreditCard } from './components/CreditCard/CreditCard';

function App() {
  return (
    <React.Fragment>
      <h1>Iteration 1 | Id Cards </h1>
      <IdCard
        image="https://randomuser.me/api/portraits/men/44.jpg"
        firstName="John"
        lastName="Doe"
        gender="male"
        height={178 + 'm'}
        birthday={new Date('1992-07-14').toString().slice(0, 15)}
      />
      <IdCard
        image="https://randomuser.me/api/portraits/women/44.jpg"
        firstName="Daina"
        lastName="Slezaite"
        gender="female"
        height={172 + 'm'}
        birthday={new Date('1996-06-13').toString().slice(0, 15)}
      />
      <h1>Iteration 2 | Greetings </h1>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">Michelle</Greetings>
      <h1>Iteration 3 | Random </h1>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <h1>Iteration 4 | BoxColor </h1>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <h1>Iteration 5 | CreditCard </h1>
      <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white" />
      <CreditCard
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="black" />
      <CreditCard
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white" />

    </React.Fragment>
  );
}

export default App;
