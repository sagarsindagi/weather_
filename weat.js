const apikey="a2feb04fccb41938351ddc4e414cfed4";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchbox= document.querySelector(".search input");
const searchbtn= document.querySelector(".search button");

const weather_icon=document.querySelector(".weather_icon");
async function checkweather(city) {
    const response=await fetch(apiurl + city + `&appid=${apikey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display="block";
         document.querySelector(".weather").style.display="none";
    }
    else{
        var data=await response.json();
        document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp )+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";

    if(data.weather[0].main=="Clouds"){
       weather_icon.src = "clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
       weather_icon.src = "clear.png";
    }
    else if(data.weather[0].main="Rain"){
       weather_icon.src = "rain.png";
    }
    else if(data.weather[0].main="Drizzle"){
       weather_icon.src = "drizzle.png";

    }
    else if(data.weather[0].main="Mist")
    {
       weather_icon.src = "mist.png";
    }
    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";
    }
    

    
    
    
    
}
searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
});
checkweather();
//   api=a2feb04fccb41938351ddc4e414cfed4