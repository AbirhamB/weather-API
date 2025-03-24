const ApiKey= "474497e503f6db612920d063fa5f6fe3";

const ApiUrl= `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;



const searchBox= document.querySelector('.searchBox');
const searchBtn= document.querySelector('.searchBtn')

const checkWeather=async (city)=>{
    const response = await fetch(ApiUrl + city + `&appid=${ApiKey}`)
    
    let data =await response.json()
    console.log(data)

    document.querySelector('.temp').innerHTML= Math.round(data.main.temp) + "°C";
    document.querySelector('.city').innerHTML= data.name;
    document.querySelector('.humidity-result').innerHTML= data.main.humidity + "%";
    document.querySelector('.wind-result').innerHTML= data.wind.speed +" km/h";

    if(data.weather[0].main=="Clouds"){
        document.querySelector('.weather-img').src='./cloud.jpg'
    }
    else if(data.weather[0].main=="Clear"){
        document.querySelector('.weather-img').src='./clear.jpg'
    } 
    else if(data.weather[0].main=="Rain"){
        document.querySelector('.weather-img').src='./rain.jpg'
    }
    else if(data.weather[0].main=="Drizzle"){
        document.querySelector('.weather-img').src='./drizzle.jpg'
    }
    else if(data.weather[0].main=="Mist"){
        document.querySelector('.weather-img').src='./mist.jpg'
    }
}

searchBtn.addEventListener('click',()=>{
    checkWeather(searchBox.value);
})

