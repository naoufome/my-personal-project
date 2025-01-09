const apiKey="8fd9cf5f20e0a775fdafab07ca8cdd74";
const apiUrlLocation="https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}"
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let tempp=document.querySelector('.temp');
let city = document.querySelector('.city');
let image1 = document.querySelector('.weather-icon');
let searchIcon=document.getElementById('searchIcon');
let searchText =document.getElementById('search');
let humidity=document.querySelector('.humidity');
let wind=document.querySelector('.wind');
let error=document.querySelector('.error');

async function checkWeather(query) {
    const response = await fetch(apiUrl+`${query}&appid=${apiKey}`);
    if(response.status ==404){
        error.style.display='block';
        document.querySelector('.weather').style.display='none';
    }else{
        let data= await response.json();
        city.textContent=data.name;
        tempp.textContent=Math.round(data.main.temp)+'°c';
        wind.textContent=data.wind.speed+'km/h';
        humidity.textContent=data.main.humidity+'%';
        switch(data.weather[0].main){
            case 'Clear':
                image1.src="images/clear.png";
                break;
            case 'Clouds':
                image1.src="images/clouds.png";
                break;
            case 'Drizzle':
                image1.src="images/drizzle.png";
                break;
            case 'Mist':
                image1.src="images/mist.png";
                break;
            case 'Rain':
                image1.src="images/rain.png";
                break;
            case 'Snow':
                image1.src="images/snow.png";
                break;
        }
        error.style.display='none';
        document.querySelector('.weather').style.display='block';
    }
    
    searchText.value="";
}
checkWeather("Mohammedia");

searchIcon.onclick= function search(){
    checkWeather(searchText.value);
}