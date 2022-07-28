const city=document.getElementById("city")
const search=document.getElementById("search")

async function fetchWeather(cityName) {
    let apiKey="62f18145add6a25ae2f3bc049173a75e"
    let api=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
    
    let reponse=await fetch(api)
    let result = await reponse.json()
    document.getElementById("temp").innerText=result.main.temp
    document.getElementById("max_temp").innerText=result.main.max_temp
    document.getElementById("min_temp").innerText=result.main.min_temp
    document.getElementById("humidity").innerText=result.main.humidity
}
search.addEventListener("click", (e) => {
    let cityName=city.value
    fetchWeather(cityName)
})



/* search.addEventListener("click", (e)=>{
    //grab the input from city input field
    let cityName=city.value


    //ask openweatherapi to give me weather data of that city
    let apiKey="62f18145add6a25ae2f3bc049173a75e"
    let api=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`

    fetch(api)
    .then((reponse) =>{
        return reponse.json()
    })
    .then((response) =>{
        console.log(response);
        console.log(response.main.temp)
        document.getElementById("temp").innerText=response.main.temp
        document.getElementById("max_temp").innerText=response.main.max_temp
        document.getElementById("min_temp").innerText=response.main.min_temp
        document.getElementById("humadity").innerText=response.main.humadity
    })
    .catch((error) => {
        console.log(error);
    })
   //display data of that city
}) */