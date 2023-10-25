var inputvalue = document.querySelector('#cityinput')
var btn = document.querySelector('#add')
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')


function convertion(val)
{
    return (val - 273).toFixed(3)

}
apik ="e8e686d085d1992cef1a5f612ccf2b50"
btn.addEventListener('click', function(){
 //  https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik)
    .then(res =>res.json())

    .then(data =>{
        var nameval = data['name']
        var descrip = data['weather']['0']['description']
        var tempature = data['main']['temp']
        var windspeed = data['wind']['speed']

        city.innerHTML`Weather of <span>${nameval}<span>`
        temp.innerHTML`Temperature: <span>${ convertion(tempature)} C<span>`
        description.innerHTML`Sky Conditions: <span>${descrip}<span>`
        city.innerHTML`Wind Speed: <span>${windspeed}<span>`
    })

    .catch(err => alert('You have entered wrong city'))


}
)