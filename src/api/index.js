import axios from 'axios';
const url='https://covid19.mathdro.id/api';

export const fetchData=async(country)=>{
    let changeableurl=url;

    if(country){
        changeableurl=`${url}/countries/${country}`
     
    }
    try{
        const {data:{confirmed,recovered,deaths,lastUpdate,countries}}=await axios.get(changeableurl); 
         return {confirmed,recovered,deaths,lastUpdate,countries};
       
    }
    catch(error){

    }
}

export const fetchDailyData=async()=>{
    try{
        const { data }= await axios.get(`${url}/daily`);
        const modifiedData=data.map((dailyDAta)=>({
            confirmed:dailyDAta.confirmed.total,
            deaths:dailyDAta.deaths.total,
            recovered:dailyDAta.recovered.total,
            date:dailyDAta.reportDate,
        }));
        return modifiedData;
    }
    catch(error){

    }
}
export const fetchCountries=async()=>{
    try{
        const {data:{countries}}=await axios.get(`${url}/countries`);
        return countries.map((country)=>country.name)
    }
    catch(error){

    }
}