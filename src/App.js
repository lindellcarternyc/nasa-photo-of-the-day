import React from "react";
import "./App.css";
import axios from 'axios'

import Header from './components/Header'
import Footer from './components/Footer'
import Container from './components/Container'
import APOD from './components/APOD/APOD'

function App() {
  const [data, setData] = React.useState(null)
  
  React.useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&concept_tags=True`)
      .then(res => {
        console.log(res.data.date)
        setData(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  return (
    <div className="App">
      <Header />
      <Container style={{
        marginTop: '75px'
      }}>
        {data === null && <h3>Loading...</h3>}
        {data !== null && <APOD date={data.date} url={data.url} explanation={data.explanation} title={data.title}/>}
      </Container>
      <Footer />
    </div>
  );
}

export default App;
