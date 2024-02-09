const apikey ="b376bb9f97217a9d3ebbbf89b60a0ebe";
        const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchArea= document.querySelector(".search input");
const searchBtn= document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");

        async function checkWeather(city){
            const response =await fetch(apiUrl+ city +`&appid=${apikey}`);
            var data =await response.json();


            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
            document.querySelector(".wind").innerHTML = data.wind.speed + "Kmph";
       


if(data.weather[0].main=="Clouds") {
    weatherIcon.src="images/Clouds.png";
}else if(data.weather[0].main=="Clear"){
    weatherIcon.src="images/Clear.png";
}else if(data.weather[0].main=="Drizzle"){
    weatherIcon.src="images/Drizzle.png";
}else if(data.weather[0].main=="mist"){
    weatherIcon.src="images/mist.png";
}

document.querySelector(".weather").style.display="block";

}

        
        searchBtn.addEventListener("click", ()=>{
            checkWeather(searchArea.value);

        })
