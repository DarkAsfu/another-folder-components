import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './components/Country/Countries';
import Person from './components/Person/Person';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Countries></Countries>
      <Person></Person>
      {/* <LoadCountries></LoadCountries> */}
    </div>
  );
}
function LoadCountries() {
  const [countries, setCountries] = useState([]);

  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))

  }, [])
  return (
    <div>
      <h1>Visiting Every coutry of the world</h1>
      <h3>Available countries: {countries.length}</h3>
      {
        countries.map(country => <Country name={country.name.common} population={country.population} flag={country.flags.png} capital={country.capital}></Country>)
      }
    </div>
  )
}

function Country(props) {
  return (
    // style={{border: '2px solid gray', margin:'10px'}}
    <div>
      <h2>Name: {props.name}</h2>
      <h4>Population: {props.population}</h4>
      <p>Capital: {props.capital}</p>
      <img src={props.flag} alt="" />
    </div>
  )
}
export default App;
