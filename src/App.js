import React from 'react'
import {Cards,Chart,CountryPicker} from './components'
import styles from './App.module.css'
import {fetchData} from './api'
import coronaImage from '../src/images/image.jpg'
class App extends React.Component{
  state={
    data:{},
    country:{},
  }
  async componentDidMount()
      {
        const fetch=await fetchData();

        this.setState({data:fetch});
      }
  handleCountryChange=async(country)=>{
    const fetched=await fetchData(country);
     this.setState({data:fetched,country:country});
  }
  render(){
    const {data,country}=this.state;
    return(
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="covid-19"/>
        <Cards data={data}/>
        <CountryPicker 
        handleCountryChange={this.handleCountryChange}
        />
        <Chart data={data} country={country}/>
      </div>
    )
  }
}
   

export default App;
