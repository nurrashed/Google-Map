const div = document.getElementById("divId");
const getCities = document.getElementById("get-cities");
//const output= document.getElementById('pId');
const getBrooklyn= document.getElementById('get-Brooklyn');
const listItem = document.getElementsByTagName('li')
const getManhattan= document.getElementById('get-Manhattan');
const getStaten = document.getElementById('get-Staten');
const getBronx = document.getElementById('get-Bronx');
const getQueens = document.getElementById('get-Queens');
let apt = [];
getCityData = async () =>{
  try {
   // Call the API to fetch data
   const result = axios.get("https://api.myjson.com/bins/2sadq?pretty=1");
   // Await the result from the server and store
   // the result in a variable named customers
   const { data: apartments } = await result;
  apt = apartments;
} 
catch (err) {
  div.innerHTML = `Couldn't reach the API.`;
  console.log("getCustomers: ERROR", err);
}
}
getCityData();
getBrooklyn.onclick = async () => {
  try {
    div.innerHTML = ""
    apt.apartments.forEach(apartment => 
        {   
            if(`${apartment.city}`==='Brooklyn'){
                div.innerHTML += `<strong>${apartment.description}</strong><br> 
                ${apartment.address} <br>
                <small>bedrooms: ${apartment.bedrooms} / neighborhood: ${apartment.neighborhood}</small> <br><br><br>`;
            }
});

  } 
  catch (err) {
    div.innerHTML = `Couldn't reach the API.`;
    console.log("getCustomers: ERROR", err);
  }
};
getManhattan.onclick = async () => {
  try {
    div.innerHTML = ""
    apt.apartments.forEach(apartment => 
        {   
            if(`${apartment.city}`==='Manhattan'){
                div.innerHTML += `<strong>${apartment.description}</strong><br> 
                ${apartment.address} <br>
                <small>bedrooms: ${apartment.bedrooms} / neighborhood: ${apartment.neighborhood}<small> <br><br><br>`;
            }
});
  } 
  catch (err) {
    div.innerHTML = `Couldn't reach the API.`;
    console.log("getCustomers: ERROR", err);
  }
};
 getStaten.onclick = async () => {
  try {
    div.innerHTML = ""
    apt.apartments.forEach(apartment => 
        {   
            if(`${apartment.city}`==='Staten Island'){
                div.innerHTML += `<strong>${apartment.description}</strong><br> 
                ${apartment.address} <br>
                <small>bedrooms: ${apartment.bedrooms} / neighborhood: ${apartment.neighborhood}</small> <br><br><br>`;
            }
});
  } 
  catch (err) {
    div.innerHTML = `Couldn't reach the API.`;
    console.log("getCustomers: ERROR", err);
  }
};

getBronx.onclick = async () => {
  try {
    div.innerHTML = ""
    apt.apartments.forEach(apartment => 
        {   
            if(`${apartment.city}`==='The Bronx'){
                div.innerHTML += `<strong>${apartment.description}</strong><br> 
                ${apartment.address} <br>
                <small>bedrooms: ${apartment.bedrooms} / neighborhood: ${apartment.neighborhood}</small><br><br><br>`;
            }
});
  } 
  catch (err) {
    div.innerHTML = `Couldn't reach the API.`;
    console.log("getCustomers: ERROR", err);
  }
};

getQueens.onclick = async () => {
  try {
    div.innerHTML = ""
    apt.apartments.forEach(apartment => 
        {   
            if(`${apartment.city}`==='Queens'){
                div.innerHTML += `<strong>${apartment.description}</strong><br> 
                ${apartment.address} <br>
                <small>bedrooms: ${apartment.bedrooms} / neighborhood: ${apartment.neighborhood}</small><br><br><br>`;
            }
});
  } 
  catch (err) {
    div.innerHTML = `Couldn't reach the API.`;
    console.log("getCustomers: ERROR", err);
  }
};