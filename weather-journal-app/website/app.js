/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

baseURL =//api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
apiKey =ac8214f6f2fd2b14047e7a067b43359b;

document.getElementById('generate').addEventListener('click', getUserCredentials);


function getUserCredentials(e){
const userZip = document.getElementById(zip).value;
const userFav = document.getElementById(feelings).value;
getUserTemp(baseURL,userZip,apiKey)
   .then((data)=>{
     console.log(data);

       const day = data.list[0].dt_txt.slice[0,10];
        postData('/add',{temp:data.list[0].main.temp, date:day,userRes:userFav})
        updateUI();
})

}

 const getUserTemp = async (baseURL,userZip,apiKey)=>{
      const res = await fetch(baseURL+userZip+apiKey)
      try{
           const data = await res.json();
           console.log(data);
           return data;
      }catch(error){
        console.log("error",error);
      }  
      }

const updateUI = async () => {
     const res = await fetch('/get')
       try{
            const userData = await res.json();
            document.getElementById('temp').innerHTML = `Your Temprature: ${userData.temp} Celcius`;
            document.getElementById('Date').innerHTML = `Your Date: ${userData.date}`;
            document.getElementById('content').innerHTML = `I feel: ${userData.userRes}`;
       }catch(error){
        console.log("error",error);
      }  


}

//   postData('/addAnimal', {animal:'Chicken', color:'Green'});

const button = document.querySelector('generate');
  
button.addEventListener('click', () => {
postData('/add', {userZip:'12345', userFav:'hot'});

})




     app.post('/add', (request,response)=>{
      // console.log(request.body)
      let data = request.body;
      console.log(data.temp);
     
/* Function to POST data */
const postData = async ( url = '', projectData = {})=>{
  console.log(projectData);
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Contents-Type': 'application/json',
      
    },
    // body data type must match Contents-Type header
     body: JSON.stringify(projectData) ,
  });
     try {
          const newData = await response.json();
          console.log("newData",newData);
           return newData;
     }catch(error){
      console.log("error",er)
     }
  
     }



      // Create new entry for JS Object Endpoint
      projectData["temp"] = data.temp;
      projectData["feel"] = data.feeling;
      projectData["date"] = data.date;
     
      // Send response to Endpoint
      response.send(projectData);
     })
  
  
  /* Function to GET Project Data */
  const retrieveData = async () =>{
      const request = await fetch('/all');
      try {
      // Transform into JSON
      const allData = await request.json()
      console.log(allData)
      // Write updated data to DOM elements
      document.getElementById('temp').innerHTML = Math.round(allData.temp)+ 'degrees';
      document.getElementById('content').innerHTML = allData.feel;
      document.getElementById('date').innerHTML =allData.date;
      }
      catch(error) {
        console.log("error", error);
        // appropriately handle the error
      }
     }


  
  