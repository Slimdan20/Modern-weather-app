function userLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric"
            fetch(apiUrl + `&appid=${apiKey}` + `&lat=${latitude}` + `&lon=${longitude}`)
            .then(response=>response.json())
            .then(data=>console.log(data))
            .catch(error=>{
                console.error("Error fetching weather data:", error);
                if(error.code === error.PERMISSION_DENIED){
                    alert("location denied")
                } else{
                    alert("an error occured");
                }
            })
        
        });}
        (error)=>{
            if(error.code === error.PERMISSION_DENIED){
                alert("location denied, displaying weather for london instead")
            }
            else{
                alert('an error occured')
            }
        }

}

window.onload = userLocation