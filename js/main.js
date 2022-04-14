/*//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getDrink)

function getDrink(){
    let drink = document.querySelector('input').value

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.drinks)

    
      document.querySelector('h2').innerText = data.drinks[0].strDrink

       //now we need to put the img on the dom ; we use src for the img: we need to use the prop that has the img which is the thumbnail
     
       document.querySelector('img').src = data.drinks[0].strDrinkThumb
       //now we need to put the instructions on the pg we're goint to target the h3 for this
     
       document.querySelector('h3').innerText = data.drinks[0].strInstructions
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}


============================With notes, has a bug need to fix===================================================================================*/

document.querySelector('button').addEventListener('click', getDrink)



function getDrink(){
  document.querySelector('.drinks').innerHTML = ""
 let drink= document.querySelector('input').value.replace(/\s+/g, "_")

  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {


     // console.log(data.drinks)


      for(let i = 0; i < data.drinks.length; i++){
      document.querySelector('.drinks').innerHTML+= `<h2>${data.drinks[i].strDrink}</h2>`
      document.querySelector('.drinks').innerHTML += `<img src="${data.drinks[i].strDrinkThumb}" alt="picture of an alcoholic drink"> `
      document.querySelector('.drinks').innerHTML += `<h3>${data.drinks[i].strInstructions}</h3>`
      }
      
    })
 

    .catch(err => {
        console.log(`error ${err}`)
    });

}


