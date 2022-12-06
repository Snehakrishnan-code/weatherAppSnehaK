function search() {
    city = loc.value

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5b4bee0ba241d092159faf007e166080`)
      .then(d => d.json()).then(resp => displaydata(resp))
  }


  function displaydata(city) {

    cname = city.name
    temp = city.main.temp
    weather = city.weather[0].main
    humidity = city.main.humidity
    speed = city.wind.speed
    sunrise = city.sys.sunrise
    sunset = city.sys.sunset

    htmldata = `
    <div class="card" >
    <img src="./four_seasons.webp" class="card-img-top img-fluid" alt="...">
    <div class="container w-75 card border border-white" style="width: 18rem;>
      <div class="card-body">
      <h1 class="card-title text-dark">${cname}</h1>
      <h1 class="card-text text-dark">${Math.floor(temp - 273.15)}°C</h1>
    </div>
    <li class="list-group-item text-dark">Weather :${weather}</li> <br>
      <li class="list-group-item text-dark">Humidity :${humidity}%</li> <br>
        <li class="list-group-item text-dark">Wind Speed :${speed}m/s</li> <br>
          <li class="list-group-item text-dark">Sunrise :${sunrise}</li> <br>
            <li class="list-group-item text-dark">Sunset :${sunset}</li> <br>
            </ul>
          </div>
</div>
         `
    result.innerHTML = htmldata
  }

