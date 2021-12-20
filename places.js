window.onload = () => {
    let places = staticLoadPlaces();
    renderPlaces(places);
};

function staticLoadPlaces() {
   return [

    

    {
     name: 'CITY AT SPEED 2019 - Acrylic on canvas 16 x 20 inches',
     logo: 's.png',
     width: "0.8",
     height: "1",
     location: {
         lat: 40.71601,
         lng: -73.83716,
     }
  
 },

   
 {
     name: 'PLEASANTVILLE 2019 - Acrylic on canvas 22 x 28 inches',
     logo: 's2.png',
     width: "1",
     height: "0.8",
     location: {
         lat: 40.71574,
         lng: -73.83686,
     }
 },

 {
     name: 'WIND OF CHANGE 2019 Acrylic on canvas 20 x 16 inches',
     logo: 's3.png',
     width: "0.8",
     height: "1",
     location: {
         lat: 40.71544,
         lng: -73.83649,
     }
 },

 {
     name: 'test',
     logo: 's4.png',
     width: "0.8",
     height: "1",
     location: {
         lat: 40.71519,
         lng: -73.83622,
     }
 },
 





 {
    name: 'CITY AT SPEED 2019 - Acrylic on canvas 16 x 20 inches',
    logo: 's.png',
    width: "0.8",
    height: "1",
    location: {
        lat: 43.72661,
        lng: 19.70071,
    }
 
},


{
    name: 'PLEASANTVILLE 2019 - Acrylic on canvas 22 x 28 inches',
    logo: 's2.png',
    width: "1",
    height: "0.8",
    location: {
        lat: 43.72665,
        lng: 19.70081,
    }
},


{
    name: 'WIND OF CHANGE 2019 Acrylic on canvas 20 x 16 inches',
    logo: 's3.png',
    width: "0.8",
    height: "1",
    location: {
        lat: 43.72668,
        lng: 19.70092,
    }
},

{
    name: 'Sandra Vucicevic - HERE COMES THE SUN - 2020 w16 h20',
    logo: 's4.png',
    width: "0.8",
    height: "1",
    location: {
        lat: 43.72671,
        lng: 19.70104,
    }
},






{
    name: 'Sandra Vucicevic - HERE COMES THE SUN - 2020 w16 h20',
    logo: 's.png',
    width: "0.8",
    height: "1",
    location: {
        lat: 24.95905,
        lng: 55.14706,
    }
},
{
    name: 'Sandra Vucicevic - HERE COMES THE SUN - 2020 w16 h20',
    logo: 's2.png',
    width: "1",
    height: "0.8",
    location: {
        lat: 24.95913,
        lng: 55.14711,
    }
},
{
    name: 'Sandra Vucicevic - HERE COMES THE SUN - 2020 w16 h20',
    logo: 's3.png',
    width: "1",
    height: "0.8",
    location: {
        lat: 24.95921,
        lng: 55.14716,
    }
},
{
    name: 'Sandra Vucicevic - HERE COMES THE SUN - 2020 w16 h20',
    logo: 's4.png',
    width: "1",
    height: "0.8",
    location: {
        lat: 24.95928,
        lng: 55.14722,
    }
},



{
    name: 'Sandra Vucicevic - HERE COMES THE SUN - 2020 w16 h20',
    logo: 's.png',
    width: "0.8",
    height: "1",
    location: {
        lat: 45.25474,
        lng: 19.84251,
    }
},
{
    name: 'Sandra Vucicevic - HERE COMES THE SUN - 2020 w16 h20',
    logo: 's2.png',
    width: "1",
    height: "0.8",
    location: {
        lat: 45.25481,
        lng: 19.84244,
    }
},
{
    name: 'Sandra Vucicevic - HERE COMES THE SUN - 2020 w16 h20',
    logo: 's3.png',
    width: "1",
    height: "0.8",
    location: {
        lat: 45.25489,
        lng: 19.84238,
    }
},
{
    name: 'Sandra Vucicevic - HERE COMES THE SUN - 2020 w16 h20',
    logo: 's4.png',
    width: "1",
    height: "0.8",
    location: {
        lat: 45.25497,
        lng: 19.84232,
    }
},





   ];
}

function renderPlaces(places) {
   let scene = document.querySelector('a-scene');

   places.forEach((place) => {
       let latitude = place.location.lat;
       let longitude = place.location.lng;
       let name2 = place.name;
       let logo = place.logo;
       let wdt = place.width;
       let hg = place.height;


       

       const model = document.createElement('a-image');
                   model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude}`);
                   model.setAttribute('name', name2);
                   model.setAttribute('src', logo);
                   model.setAttribute('width', wdt); 
                   model.setAttribute('height', hg); 
                   model.setAttribute('look-at', '[gps-camera]');





                   // for debug purposes, just show in a bigger scale, otherwise I have to personally go on places...
                   model.setAttribute('scale', '10, 10');

                   

    

       model.addEventListener('loaded', () => {
           window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
       });

       


       
       const clickListener = function(ev) {
        ev.stopPropagation();
        ev.preventDefault();

        const name = ev.target.getAttribute('name');
        
        const el = ev.detail.intersection && ev.detail.intersection.object.el;

        //const distanceMsg = document.querySelector('[gps-entity-place]').getAttribute('distanceMsg');


        if (el && el === ev.target) {

    
            const label = document.createElement('span');
            //const msg = document.createElement('p');
            const container = document.createElement('div');
            const btn = document.createElement('button');
            //const link = document.createElement('a');
           // const btn1 = document.createElement('button');
            container.setAttribute('id', 'place-label');
            //link.setAttribute('href', place.link2);
            label.innerText = name;
           //msg.innerText = distanceMsg;
            btn.innerText = 'Close';
            //link.innerText = 'Zavrtite tocak';
           // btn1.innerText = 'Play';
            container.appendChild(label);
            //container.appendChild(msg);
            container.appendChild(btn);
            //container.appendChild(link);
            //container.appendChild(btn1);
            document.body.appendChild(container);

           // btn1.addEventListener("click", function() {
             //   let play = new SpeechSynthesisUtterance();
              // play.text = name;
              // window.speechSynthesis.speak(play);
              //});

            btn.addEventListener("click", function() {
                container.parentElement.removeChild(container);
              });

           // setTimeout(() => {
             //   container.parentElement.removeChild(container);
            //}, 1500);
        }
    };

    model.addEventListener('click', clickListener);
       scene.appendChild(model);
   });
}