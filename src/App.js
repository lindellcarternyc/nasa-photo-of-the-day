import React from "react";
import "./App.css";

import axios from 'axios'

import Layout from './components/Layout'
import APOD from './components/APOD/APOD'

function App() {
  const [data, setData] = React.useState(null)
  
  React.useEffect(() => {
    const getApodData = () => {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&concept_tags=True`)
      .then(res => {
        console.log(res.data.date)
        setData(res.data)
      })
      .catch(err => {
        console.log(err)
      })
    }

    getApodData()
  }, []) /* eslint-disable-line */
  return (
    <div className="App">
      <Layout>
        {data === null && <h3>Loading...</h3>}
        {data !== null && <APOD date={data.date} url={data.url} explanation={data.explanation} title={data.title}/>}
      </Layout>
    </div>
  );
}

export default App;
