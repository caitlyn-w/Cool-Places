var cities = ["New York, USA", "San Francisco, USA", "Chicago, USA", "Los Angeles, USA", "Toronto, CA",
              "Quebec, CA", "Seattle, USA", "Miami, USA", "Atlanta, USA", "Bucharest, Romania",
            "Bratislava, Slovakia", "Paris, France", "Santorini, Greece", "Copenhagen, Denmark", "Barcelona, Spain", "Porto, Portugal",
          "Milan, Italy", "Marrakech, Morocco", "Cairo, Egypt", "Cape Town, South Africa", "Tel Aviv, Israel", "Fez, Morocco", "Nairobi, Kenya", "Tashkent, Uzbekistan", "Dubai, UAE", "Kyoto, Japan", "Hanoi, Vietnam",
        "Chengdu, China", "Bali, Indonesia", "Mumbai, India", "Chiang Mai, Thailand", "Siem Reap, Cambodia", "Moscow, Russia", "Sydney, Australia", "Auckland, New Zealand", "Rio, Brazil", "Machu Pichu, Peru", "Galapagos Islands", "Cartegena, Columbia", "Drake Passage, Antartica"]

var photos = ["pexels-photo-466685.jpg", "pexels-photo-1141853.jpg", "pexels-photo-876218.jpg", "pexels-photo-2626916.jpg", "pexels-photo-1519088-1.jpg", "pexels-photo-1108328.jpg", "pexels-photo-656195.jpg",
              "pexels-photo-421655.jpg"]

var button = $('button');

button.on('click', changeCity);

function changeCity(){
  var c = "";
  var p = "";
  var randomDecimal = Math.random();
  var random = randomDecimal * cities.length;
  var final = Math.floor(random);
  c = cities[final]
  console.log(cities[final]);

  p = photos[final]
  console.log(photos[final]);

  $('.city').text(`${c}`)
  $('.photo').img(`${p}`)

  // button.text('cities')
}


button.on("click", changeColor);

function changeColor(){
  console.log('The button was clicked')
  var color = 'green';
  button.css('backgroundColor', color)
}
