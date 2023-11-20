// let searchBtn = document.getElementById("search-btn");
// let countryInput = document.getElementById("country-input");
// let resultEl = document.getElementById("result");

// searchBtn.addEventListener("submit", (e)=>{
//     e.preventDefault()
//     let countryName = countryInput.value;
//     let finalUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
//     fetch(finalUrl).then((res)=>{
//       return  res.json()
//     }).then((data)=>{
//         console.log(data)
//         let capital = data[0].capital[0]
//         let continent = data[0].continents[0]
//         let population = data[0].population
//         let flag = data[0].flags.svg
//         let name = data[0].name.common
//         let sym = Object.keys(data[0].currencies)[0]
//         let currencyName = data[0].currencies[sym].name;
//         let currency = Object.keys(data[0].currencies)[0];
//         let languages = Object.values(data[0].languages).toString().split(",").join(",");
        
//         resultEl.innerHTML = `

//             <img src="${flag}" class="flag-img">
//             <h2>${name}</h2>
//             <div class="wrapper">
//                 <div class="data-wrapper">
//                     <h4>Capital:</h4>
//                     <span>${capital}</span>
//                 </div>
//                 <div class="data-wrapper">
//                     <h4>Continent:</h4>
//                     <span>${continent}</span>
//                 </div>
//                 <div class="data-wrapper">
//                     <h4>Population:</h4>
//                     <span>${population}</span>
//                 </div>
//                 <div class="data-wrapper">
//                     <h4>Currency:</h4>
//                     <span>${currencyName} - ${currency}</span>
//                 </div>
//                 <div class="data-wrapper">
//                     <h4>Common Language:</h4>
//                     <span>${languages}</span>
//                 </div>

//             </div>
        
//         `


//     }).catch(()=>{
//         if(!countryName){
//             resultEl.innerHTML = `
//             <h3>The input field cannot be empty</h3>`
//         }else{
//             resultEl.innerHTML = `
//             <h3>Please enter a valid country name</h3>`
//         }
//     })
// })