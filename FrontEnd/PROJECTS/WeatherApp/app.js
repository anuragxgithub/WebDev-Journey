const countryAndCityToLatLon = "https://api.positionstack.com/v1/forward?access_key=e042a9e305a7fc8fd84fdc018e958dd5&query={city}&country={countryCode}&limit=1"
const latlonToTemp = "https://api.weatherapi.com/v1/current.json?key=3072d63ab201416586e132347262303&q={lat},{lon}"
let slectedCountryCode = null;

let select = document.getElementById("country")
let countryFlagImg = document.querySelector("img")
// adding options of all countries for selection
for(code of countryCodes) {
    let newOption = document.createElement("option")
    newOption.innerText = code;
    newOption.value = code;
    select.append(newOption);
    if(code === "IN") {
        newOption.selected = "selected";
        slectedCountryCode = code;
        countryFlagImg.src = `https://flagsapi.com/${code}/flat/64.png`;
    } 
}

select.addEventListener("change", (evt) => {
    slectedCountryCode = evt.target.value;
    updateFlag(evt.target);
})

const updateFlag = (element) => {
    countryFlagImg.src = `https://flagsapi.com/${element.value}/flat/64.png`;
}

btn = document.querySelector("button")
btn.addEventListener("click", (evt) => {
    evt.preventDefault()
    // take the city name entered by the user
    const cityName = document.getElementById("city-name").value;

    // since we have country code and city name lets get the lat lons the using api
    getLatLons(cityName); 
})


const getLatLons = async (cityName) => {
    try {
        let res = await fetch(`https://api.positionstack.com/v1/forward?access_key=e042a9e305a7fc8fd84fdc018e958dd5&query=${cityName}&country=${slectedCountryCode}&limit=1`)
        if(!res.ok) {
            throw new Error("Failed to fetch location data");
        }
        let jsObject = await res.json();

        //check if data exist
        if(!jsObject.data || jsObject.data.length === 0) {
            throw new Error("No location found");
        }
        
        let lat = jsObject.data[0].latitude;
        let lon = jsObject.data[0].longitude;
        // now since we have lat lons lets get temperature info using api
        getTempData(lat, lon);
    } catch(err) {
        displayDataIfError(err.message)
    }
    
}

const getTempData = (lat, lon) => {  // lets handle it using promise chaining
    let promise = fetch(`https://api.weatherapi.com/v1/current.json?key=3072d63ab201416586e132347262303&q=${lat},${lon}`);
    promise.then((res) => {
        return res.json();
    }).then((data) => {
        // lets extract the data
        let currenTempInDegC = data.current.temp_c;
        let windInMPH = data.current.wind_mph;
        let feelsLikeInDegC = data.current.feelslike_c;
        displayData(currenTempInDegC, feelsLikeInDegC, windInMPH)
    })
    .catch((err) => displayDataIfError(err.message));
}


const displayData = (currTemp, feelsLike, wind) => {
    const currTempDegC = document.querySelector(".curr-temp"); 
    const feelsLikeDegC = document.querySelector(".feels-like"); 
    const windMPH = document.querySelector(".wind-speed");
    currTempDegC.innerText = `Current temperature : ${currTemp}°C`;
    feelsLikeDegC.innerText = `Feels Like : ${feelsLike}°C`;
    windMPH.innerText = `Wind speed : ${wind}mph`;
}
const displayDataIfError = (errMessage) => {
    const errorShower = document.querySelector(".error"); 
    errorShower.innerText = `${errMessage}`;
}