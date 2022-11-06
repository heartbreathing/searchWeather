    "use strict";
      let timeEl = document.querySelector('.time')

      function getTime(){
        timeEl.innerHTML = new Date().toDateString()
      }
      getTime()
    //   function getTime() {
    //     timeEl.innerHTML = new Date().toDateString();
    //     // setTimeout(getTime, 1000);
    //   }
    //   getTime();

      
      let form = document.querySelector('.form');
      let city;

      async function getData() {
        let res = await fetch(
          `https://goweather.herokuapp.com/weather/${city}`
        );
        const data = await res.json();

        const temp = document.querySelector('.temperature');
        const wind = document.querySelector('.wind');
        const forecast = document.querySelector('.content');
        const description = document.querySelector('.description');
        // const name = document.querySelector('.name')

        temp.innerHTML = data.temperature;
        wind.innerHTML = data.wind;
        description.innerHTML = data.description;
        // name.innerHTML = city
        
      }

      form.addEventListener('submit', function (event) {
        event.preventDefault();
        city = this.elements.name.value;
        getData();
      });
   