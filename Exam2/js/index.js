// ---------------------------------NAV JQURE---------------
let v = document.querySelector(".homedetails")
let search = document.querySelector(".search");
let d = document.querySelector(".details")
let listDetails=document.querySelector(".list-details")
let contact = document.querySelector(".contact")
let area = document.querySelector(".area")
let int = document.querySelector(".int")
let rowData = document.querySelector("#rowData")
let rowDataa = document.querySelector("#Dataa")
let r = document.querySelector(".open-close-icon");
let input = document.querySelector("#SearchLetter")
let parent = document.querySelector(".carddy");
let searchletterData= document.querySelector("#Datasearch")

let x = $(".side-nav-menu").outerWidth()
let y = $(".nav-header").outerWidth()
$(".links ul li").animate({ top: "200" }, 1100)
$(r).click(function () {

  ;

  if (r.classList.contains("fa-align-justify")) {
    $(".links ul li").animate({ top: "0" }, 1200)
    $(".side-nav-menu").animate({ left: `10px` }, 800)
    r.classList.replace("fa-align-justify", "fa-x")
  }
  else if (r.classList.contains("fa-x")) {
    $(".links ul li").animate({ top: "200" }, 1200)
    $(".side-nav-menu").animate({ left: "-257" }, 800)
    r.classList.replace("fa-x", "fa-align-justify")
  }

})

// ---------------------------------home---------------------------------

async function api() {
  let data = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s="
  );
  document.querySelector(".loading").classList.remove("d-none")
  v.classList.add("d-none")
  let res = await data.json();
  document.querySelector(".loading").classList.remove("d-none")
  v.classList.add("d-none")
  console.log(res);
  document.querySelector(".loading").classList.add("d-none")
  v.classList.remove("d-none")
  displayCat(res.meals);


}

api();
document.querySelector(".loading").classList.add("d-none")
v.classList.remove("d-none")
function displayCat(categories) {
  let parent = document.querySelector(".carddy");

  for (i = 0; i<20; i++) {
    const containerDiv = document.createElement("div");
    containerDiv.setAttribute("id", categories[i].idMeal);
    containerDiv.setAttribute("class", "col-md-3");
    const cardHtml = `
                <div class=" h-100 bg-transparent cardd position-relative overflow-hidden" role="button">
                    <div class="w-100"><img class="img-fluid rounded-3" src="${categories[i].strMealThumb}" alt=""></div>
                    <div class=" rounded-3 position-absolute d-flex align-items-center text-black overLay  "> 
                    <h1>${categories[i].strMeal}</h1>
                </div>                
                </div>
        `;

    containerDiv.innerHTML = cardHtml;

    parent.appendChild(containerDiv);
    const x = categories[i].idMeal;
    // --------------------------details section----------------------
    $(`#${x}`).click(async function () {
      closeNav()
      const apidetails = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${x}`
      );
      document.querySelector(".loading").classList.remove("d-none")
      d.classList.remove("d-none")
      let resdet = await apidetails.json();

      console.log(x)
      v.classList.add("d-none")

      for (let i = 1; i <= 20; i++) {

      }
      let disDetails = document.querySelector(".details ")
      let disData = ``
      for (i = 0; i < resdet.meals.length; i++) {
        disData = `       
        <div class="col-md-5">
        <div class="p-3">
            <img class="img-fluid" src="${resdet.meals[i].strMealThumb}" alt="">
            <h1>${resdet.meals[i].strMeal}</h1>
        </div>
        </div>
        <div class="col-md-6">
        <div>
            <h2>Instructions</h2>
            <p>${resdet.meals[i].strInstructions}</p>
            <h2>Area :${resdet.meals[i].strArea}</h2>
            <h2>category:${resdet.meals[i].strCategory}</h2>
            <h2>Recipes:</h2>
            <ul class="list-unstyled d-flex g-3 flex-wrap">
              <li class="alert alert-info m-2 p-1">${resdet.meals[i].strMeasure1} ${resdet.meals[i].strIngredient1}</li><li class="alert alert-info m-2 p-1">${resdet.meals[i].strMeasure2} ${resdet.meals[i].strIngredient2}</li><li class="alert alert-info m-2 p-1">${resdet.meals[i].strMeasure3} ${resdet.meals[i].strIngredient3}</li><li class="alert alert-info m-2 p-1">${resdet.meals[i].strMeasure4} ${resdet.meals[i].strIngredient4}</li><li class="alert alert-info m-2 p-1">${resdet.meals[i].strMeasure5} ${resdet.meals[i].strIngredient5}</li>
          </ul>
            <h2>tags:</h2>
            <ul class="list-unstyled d-flex g-3 flex-wrap">
                      
              <li class="alert alert-danger m-2 p-1">${resdet.meals[i].strTags}</li>
                      </ul>
            <a href="${resdet.meals[i].strSource}"><button  class="btn btn-success">sours</button>
            <a href="${resdet.meals[i].strYoutube}"><button  class="btn btn-danger">youtube</button>
          </div>
         </div> `
      }

      disDetails.innerHTML = disData
      document.querySelector(".loading").classList.add("d-none")
      d.classList.remove("d-none")
    })
  }
}




// ---------------------------------category---------------------------------
$("#catId").click(function () {
  closeNav()
  remove(v)
  add(search, contact, d, area,int)
  async function api() {
    let data = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    let res = await data.json();
    displayCat(res.categories);
  }
  api();
  //   if(v.classList.contains("d-none"))
  //     {
  //         v.classList.remove("d-none")
  //     }
  function displayCat(categories) {
    console.log(parent)
    let cardHtml = ``
    for (i = 0; i < 20; i++) {
      console.log(categories[i]);
      const ay = categories[i].strCategory;
      const img = "../pic/1.jpg";
      const title = "beef";
      const desc = "eshtaeshtaeshtaeshtaeshtaeshta";
      cardHtml += `
                    <div class="col-md-3">
                  <div onclick="catlist('${categories[i].strCategory}')" class=" h-100 bg-transparent cardd position-relative overflow-hidden" role="button">
                    <div class="w-100"><img class="img-fluid rounded-3" src="${categories[i].strCategoryThumb}" alt=""></div>
                    <div class=" rounded-3 position-absolute d-flex align-items-center overflow-hidden text-black overLay  "> 
                      <div>
                           <h1>${categories[i].strCategory}</h1>
                           <p>${categories[i].strCategoryDescription.split(" ").slice(0,20).join(" ")}</p>
                      </div>
                  </div>
                </div>
                </div>
          `;
      parent.innerHTML = cardHtml
    }
  }
});
async function  catlist(namee){
  closeNav()
  console.log('dasdasdad')
  parent.innerHTML=""
  let data = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${namee}`
  );
  let res = await data.json();
  listcard=``
  for(i=0;i<20;i++)
  {
    listcard+=`

    <div  class="col-md-3 ">
                  <div onclick="catlistdetails('${res.meals[i].idMeal}')" class=" bg-transparent cardd position-relative overflow-hidden" role="button">
                       <div class="w-100"><img class="img-fluid rounded-3" src="${res.meals[i].strMealThumb}" alt=""></div>
                       <div class=" rounded-3 position-absolute d-flex align-items-center text-black overLay  "> 
                       <h1>${res.meals[i].strMeal}</h1>
                  </div>                
                      </div>
                </div>
                </div>


    `
  parent.innerHTML=listcard
    
  }
  parent.innerHTML=listcard
  // https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef
}

async function catlistdetails(id){
  closeNav()
  parent.innerHTML=""
  let data = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  let res = await data.json();
  listcard=``
  for(i=0;i<res.meals.length;i++){
    listcard+=`       
        <div class="col-md-6 text-white">
        <div class="p-3">
            <img class="img-fluid" src="${res.meals[i].strMealThumb}" alt="">
            <h1>${res.meals[i].strMeal}</h1>
        </div>
        </div>
        <div class="col-md-6 text-white">
        <div>
            <h2>Instructions</h2>
            <p>${res.meals[i].strInstructions}</p>
            <h2>Area :${res.meals[i].strArea}</h2>
            <h2>category:${res.meals[i].strCategory}</h2>
            <h2>Recipes:</h2>
            <ul class="list-unstyled d-flex g-3 flex-wrap">
              <li class="alert alert-info m-2 p-1">${res.meals[i].strMeasure1} ${res.meals[i].strIngredient1}</li><li class="alert alert-info m-2 p-1">${res.meals[i].strMeasure2} ${res.meals[i].strIngredient2}</li><li class="alert alert-info m-2 p-1">${res.meals[i].strMeasure3} ${res.meals[i].strIngredient3}</li><li class="alert alert-info m-2 p-1">${res.meals[i].strMeasure4} ${res.meals[i].strIngredient4}</li><li class="alert alert-info m-2 p-1">${res.meals[i].strMeasure5} ${res.meals[i].strIngredient5}</li>
          </ul>
            <h2>tags:</h2>
            <ul class="list-unstyled d-flex g-3 flex-wrap">
                      
              <li class="alert alert-danger m-2 p-1">${res.meals[i].strTags}</li>
                      </ul>
            <a href="${res.meals[i].strSource}"><button  class="btn btn-success">sours</button>
            <a href="${res.meals[i].strYoutube}"><button  class="btn btn-danger">youtube</button>
          </div>
         </div> `
  }
  listDetails.innerHTML=listcard
}







//------------------ search-----------------
$("#searchId").click(function () {
  closeNav()
  remove(search)
  add(v, contact, d, area,int)

})
//-------------------------------- contact---------------------------------------------------------------------
$("#contact").click(function () {
  closeNav()
  remove(contact)
  add(v, area, d, search,int)
})


$("#areaId").click(function () {
  closeNav()
  remove(area)
  add(v, contact, d, search,int)
  getArea()
  async function getArea() {
    // rowData.innerHTML = ""
    $(".loading").fadeIn(300)

    const responeArea = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    const responeAreajson = await responeArea.json()
    console.log(responeAreajson.meals);

    displayArea(responeAreajson.meals)
    $(".inner-loading-screen").fadeOut(300)

  }
  function displayArea(arrayArea) {
    let boxArea = "";
    console.log(arrayArea)
    for (let i = 0; i < arrayArea.length; i++) {
      //           <div  onclick="MealCountry(${arrayArea[i].strArea})" class="col-md-3 ">

      boxArea += `
          <div  onclick="MealCountry('${arrayArea[i].strArea}')" class="col-md-3 ">
                    <div class="rounded-2 text-center cursor-icon">
                        <i class="white fa-solid fa-house-laptop fa-4x"></i>
                        <h3>${arrayArea[i].strArea}</h3>
                    </div>
                </div>

          `

    }

    rowData.innerHTML = boxArea
    console.log("work")
  }


})
// --------------------remove and add class --------------
function add(a, b, c, e,u) {
  a.classList.add("d-none")
  b.classList.add("d-none")
  c.classList.add("d-none")
  e.classList.add("d-none")
  u.classList.add("d-none")
}
// ------------------------- add remove class-----------------------------------
function remove(d) {
  d.classList.remove("d-none")


}
// ------------------------- add remove class-----------------------------------
// ------------------------- nav close class-----------------------------------

function closeNav() {
  if (r.classList.contains("fa-x")) {
    $(".links ul li").animate({ top: "200" }, 1200)
    $(".side-nav-menu").animate({ left: "-257" }, 800)
    r.classList.replace("fa-x", "fa-align-justify")
  }
}

// ------------------------- nav close class-----------------------------------





// ------------------------- Area-----------------------------------

async function MealCountry(m) {
  closeNav()
  const areaApi = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${m}`)
  const AreRes = await areaApi.json()
  rowData.innerHTML = ""

  display_ingredient(AreRes.meals)


}


function display_ingredient(ares) {
  closeNav()
  let boxArea = "";
  console.log(ares)
  for (let i = 0; i < ares.length; i++) {


    boxArea += `
                <div onclick="detailsArea('${ares[i].idMeal}')" class="col-md-3 ">
                  <div class=" h-100 bg-transparent cardd position-relative overflow-hidden" role="button">
                       <div class="w-100"><img class="img-fluid rounded-3" src="${ares[i].strMealThumb}" alt=""></div>
                       <div class=" rounded-3 position-absolute d-flex align-items-center text-black overLay  "> 
                       <h1>${ares[i].strMeal}</h1>
                  </div>                
                      </div>
                </div>

          `
  }
  rowData.innerHTML = boxArea

}
async function detailsArea(detailssArea) {
  closeNav()
  const detailsArea = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${detailssArea}`)
  const ResdetailsArea = await detailsArea.json()
  let boxDetails = ""
  for (i = 0; i < ResdetailsArea.meals.length; i++) {
    boxDetails += `       
        <div class="col-md-5 text-white">
        <div class="p-3">
            <img class="img-fluid" src="${ResdetailsArea.meals[i].strMealThumb}" alt="">
            <h1>${ResdetailsArea.meals[i].strMeal}</h1>
        </div>
        </div>
        <div class="col-md-6 text-white">
        <div>
            <h2>Instructions</h2>
            <p>${ResdetailsArea.meals[i].strInstructions}</p>
            <h2>Area :${ResdetailsArea.meals[i].strArea}</h2>
            <h2>category:${ResdetailsArea.meals[i].strCategory}</h2>
            <h2>Recipes:</h2>
            <ul class="list-unstyled d-flex g-3 flex-wrap">
              <li class="alert alert-info m-2 p-1">${ResdetailsArea.meals[i].strMeasure1} ${ResdetailsArea.meals[i].strIngredient1}</li><li class="alert alert-info m-2 p-1">${ResdetailsArea.meals[i].strMeasure2} ${ResdetailsArea.meals[i].strIngredient2}</li><li class="alert alert-info m-2 p-1">${ResdetailsArea.meals[i].strMeasure3} ${ResdetailsArea.meals[i].strIngredient3}</li><li class="alert alert-info m-2 p-1">${ResdetailsArea.meals[i].strMeasure4} ${ResdetailsArea.meals[i].strIngredient4}</li><li class="alert alert-info m-2 p-1">${ResdetailsArea.meals[i].strMeasure5} ${ResdetailsArea.meals[i].strIngredient5}</li>
          </ul>
            <h2>tags:</h2>
            <ul class="list-unstyled d-flex g-3 flex-wrap">
                      
              <li class="alert alert-danger m-2 p-1">${ResdetailsArea.meals[i].strTags}</li>
                      </ul>
            <a href="${ResdetailsArea.meals[i].strSource}"><button  class="btn btn-success">sours</button>
            <a href="${ResdetailsArea.meals[i].strYoutube}"><button  class="btn btn-danger">youtube</button>
          </div>
         </div> `

  }
  rowData.innerHTML = boxDetails
}
// ------------------------- Area-----------------------------------

// ------------------------- ingredients-----------------------------------

$(`#ingredientsId`).click(function(){
  
  closeNav()
  $(".loading").fadeIn(1000)
  remove(int)
  add(v, contact, d, search,area)
  ingredienttt()
})

async function ingredienttt(){
  let apiint = await fetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?i=list");
  let apiintRes = await apiint.json();

  let showcard = ``
  for(i=0;i<20;i++){
    showcard+=`
                    <div class="col-md-3">
                <div onclick="Apiingredinent2('${apiintRes.meals[i].strIngredient}')" class="h-100 bg-transparent cardd position-relative overflow-hidden text-white text-center" role="button">
                    <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                    <h1>${apiintRes.meals[i].strIngredient}</h1>
                    <div>${apiintRes.meals[i].strDescription.split(" ").slice(0,20).join(" ")}</div>
                </div>
                </div>
                </div>
          `;
  }
  rowDataa.innerHTML=showcard
}

async function Apiingredinent2(name){
  closeNav()
  rowDataa.innerHTML=""
  let apitwo = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${name}`);
  let apitwores = await apitwo.json()
  let showcard = ``
  for(i=0;i<apitwores.meals.length;i++){
    showcard+=`
                    <div onclick="detailsint('${apitwores.meals[i].idMeal}')" class="col-md-3 ">
                  <div class=" h-100 bg-transparent cardd position-relative overflow-hidden" role="button">
                       <div class="w-100"><img class="img-fluid rounded-3" src="${apitwores.meals[i].strMealThumb}" alt=""></div>
                       <div class=" rounded-3 position-absolute d-flex align-items-center text-black overLay  "> 
                       <h1>${apitwores.meals[i].strMeal}</h1>
                  </div>                
                      </div>
                </div>
                </div>
          `;
  }
  rowDataa.innerHTML=showcard


}
async function detailsint(id){
  closeNav()
  rowDataa.innerHTML=""
  let apiDet = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
  let apiDetRes = await apiDet.json()
  let showcard = ""
  for (i = 0; i < apiDetRes.meals.length; i++) {
    showcard += `       
        <div class="col-md-5 text-white">
        <div class="p-3">
            <img class="img-fluid" src="${apiDetRes.meals[i].strMealThumb}" alt="">
            <h1>${apiDetRes.meals[i].strMeal}</h1>
        </div>
        </div>
        <div class="col-md-6 text-white">
        <div>
            <h2>Instructions</h2>
            <p>${apiDetRes.meals[i].strInstructions}</p>
            <h2>Area :${apiDetRes.meals[i].strArea}</h2>
            <h2>category:${apiDetRes.meals[i].strCategory}</h2>
            <h2>Recipes:</h2>
            <ul class="list-unstyled d-flex g-3 flex-wrap">
              <li class="alert alert-info m-2 p-1">${apiDetRes.meals[i].strMeasure1} ${apiDetRes.meals[i].strIngredient1}</li><li class="alert alert-info m-2 p-1">${apiDetRes.meals[i].strMeasure2} ${apiDetRes.meals[i].strIngredient2}</li><li class="alert alert-info m-2 p-1">${apiDetRes.meals[i].strMeasure3} ${apiDetRes.meals[i].strIngredient3}</li><li class="alert alert-info m-2 p-1">${apiDetRes.meals[i].strMeasure4} ${apiDetRes.meals[i].strIngredient4}</li><li class="alert alert-info m-2 p-1">${apiDetRes.meals[i].strMeasure5} ${apiDetRes.meals[i].strIngredient5}</li>
          </ul>
            <h2>tags:</h2>
            <ul class="list-unstyled d-flex g-3 flex-wrap">
                      
              <li class="alert alert-danger m-2 p-1">${apiDetRes.meals[i].strTags}</li>
                      </ul>
            <a href="${apiDetRes.meals[i].strSource}"><button  class="btn btn-success">sours</button>
            <a href="${apiDetRes.meals[i].strYoutube}"><button  class="btn btn-danger">youtube</button>
          </div>
         </div> `

  }
  rowDataa.innerHTML=showcard
}

// ----------------------------ingredients-------------------------

$(`#SearchLetter`).keyup(async function(){
  
  let nnn=input.value
  input.value = input.value.replace(/\W|\d/g, '').substr(0, 1).toUpperCase()
  // console.log(input.value)
  searchFunction(input.value)
})

//--------------------- search---------------------------------------
async function searchFunction(n){
  console.log("dsd")
  let apiletter = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${n}`)
  const  apiletterRE = await apiletter.json()
  let boxDatad = ``
  console.log(apiletterRE)
  for(i=0;i<apiletterRE.meals.length;i++){
    boxDatad+=`
                    <div onclick="searchDetails('${apiletterRE.meals[i].idMeal}')" class="col-md-3 overflow-hidden">
                  <div class="  bg-transparent cardd position-relative overflow-hidden" role="button">
                       <div class="w-100"><img class="img-fluid rounded-3" src="${apiletterRE.meals[i].strMealThumb}" alt=""></div>
                       <div class=" rounded-3 position-absolute d-flex align-items-center text-black overLay  "> 
                       <h1>${apiletterRE.meals[i].strMeal}</h1>
                  </div>                
                      </div>
                </div>
                </div>
          `;
  }
  console.log()
  searchletterData.innerHTML=boxDatad


}

async function searchDetails(id)
{

  document.querySelector(".Datasearch").innerHTML =''
  let apiId= await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
  const apiIdRes= await apiId.json()

  let showcard = ""
  for (i = 0; i < apiIdRes.meals.length; i++) {
    showcard += `       
        <div class="col-md-5 text-white">
        <div class="p-3">
            <img class="img-fluid" src="${apiIdRes.meals[i].strMealThumb}" alt="">
            <h1>${apiIdRes.meals[i].strMeal}</h1>
        </div>
        </div>
        <div class="col-md-6 text-white">
        <div>
            <h2>Instructions</h2>
            <p>${apiIdRes.meals[i].strInstructions}</p>
            <h2>Area :${apiIdRes.meals[i].strArea}</h2>
            <h2>category:${apiIdRes.meals[i].strCategory}</h2>
            <h2>Recipes:</h2>
            <ul class="list-unstyled d-flex g-3 flex-wrap">
              <li class="alert alert-info m-2 p-1">${apiIdRes.meals[i].strMeasure1} ${apiIdRes.meals[i].strIngredient1}</li><li class="alert alert-info m-2 p-1">${apiIdRes.meals[i].strMeasure2} ${apiIdRes.meals[i].strIngredient2}</li><li class="alert alert-info m-2 p-1">${apiIdRes.meals[i].strMeasure3} ${apiIdRes.meals[i].strIngredient3}</li><li class="alert alert-info m-2 p-1">${apiIdRes.meals[i].strMeasure4} ${apiIdRes.meals[i].strIngredient4}</li><li class="alert alert-info m-2 p-1">${apiIdRes.meals[i].strMeasure5} ${apiIdRes.meals[i].strIngredient5}</li>
          </ul>
            <h2>tags:</h2>
            <ul class="list-unstyled d-flex g-3 flex-wrap">
                      
              <li class="alert alert-danger m-2 p-1">${apiIdRes.meals[i].strTags}</li>
                      </ul>
            <a href="${apiIdRes.meals[i].strSource}"><button  class="btn btn-success">sours</button>
            <a href="${apiIdRes.meals[i].strYoutube}"><button  class="btn btn-danger">youtube</button>
          </div>
         </div> `

  }
  document.querySelector(".Datasearch").innerHTML = showcard

}











// ---------------------------- Search----------------------------------------------


$(`#searchname`).keyup(function(){
  let Namesearch=document.querySelector('#searchname').value
  searchbyname(Namesearch)

})







async function searchbyname(search){
  

  let api= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
  let apires = await api.json()
  console.log(apires)
  console.log("apires")
  boxDatad=``
  for(i=0;i<apires.meals.length;i++)
  {
    boxDatad+=`
                    <div onclick="searchDetailsName('${apires.meals[i].idMeal}')" class="col-md-3 overflow-hidden">
                  <div class="  bg-transparent cardd position-relative overflow-hidden" role="button">
                       <div class="w-100"><img class="img-fluid rounded-3" src="${apires.meals[i].strMealThumb}" alt=""></div>
                       <div class=" rounded-3 position-absolute d-flex align-items-center text-black overLay  "> 
                       <h1>${apires.meals[i].strMeal}</h1>
                  </div>                
                      </div>
                </div>
                </div>
          `;
  }
  searchletterData.innerHTML=boxDatad
  
  }
  


  async function searchDetailsName(id)
  {
  
    document.querySelector(".Datasearch").innerHTML =''
    let apiId= await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    const apiIdRes= await apiId.json()
  
    let showcard = ""
    for (i = 0; i < apiIdRes.meals.length; i++) {
      showcard += `       
          <div class="col-md-5 text-white">
          <div class="p-3">
              <img class="img-fluid" src="${apiIdRes.meals[i].strMealThumb}" alt="">
              <h1>${apiIdRes.meals[i].strMeal}</h1>
          </div>
          </div>
          <div class="col-md-6 text-white">
          <div>
              <h2>Instructions</h2>
              <p>${apiIdRes.meals[i].strInstructions}</p>
              <h2>Area :${apiIdRes.meals[i].strArea}</h2>
              <h2>category:${apiIdRes.meals[i].strCategory}</h2>
              <h2>Recipes:</h2>
              <ul class="list-unstyled d-flex g-3 flex-wrap">
                <li class="alert alert-info m-2 p-1">${apiIdRes.meals[i].strMeasure1} ${apiIdRes.meals[i].strIngredient1}</li><li class="alert alert-info m-2 p-1">${apiIdRes.meals[i].strMeasure2} ${apiIdRes.meals[i].strIngredient2}</li><li class="alert alert-info m-2 p-1">${apiIdRes.meals[i].strMeasure3} ${apiIdRes.meals[i].strIngredient3}</li><li class="alert alert-info m-2 p-1">${apiIdRes.meals[i].strMeasure4} ${apiIdRes.meals[i].strIngredient4}</li><li class="alert alert-info m-2 p-1">${apiIdRes.meals[i].strMeasure5} ${apiIdRes.meals[i].strIngredient5}</li>
            </ul>
              <h2>tags:</h2>
              <ul class="list-unstyled d-flex g-3 flex-wrap">
                        
                <li class="alert alert-danger m-2 p-1">${apiIdRes.meals[i].strTags}</li>
                        </ul>
              <a href="${apiIdRes.meals[i].strSource}"><button  class="btn btn-success">sours</button>
              <a href="${apiIdRes.meals[i].strYoutube}"><button  class="btn btn-danger">youtube</button>
            </div>
          </div> `
  
    }
    document.querySelector(".Datasearch").innerHTML = showcard
  
  }


// ---------------------------- Search----------------------------------------------







// -----------------------------validation-------------------------

var pNameRegex = /^[a-zA-Z ]+$/;  
function valid(nameValue) {
  if (pNameRegex.test(nameValue)) {
    document.getElementById("nameAleart").classList.add("is-valid");
    document.getElementById("nameAleart").classList.add("d-none");
  } else {
    document.getElementById("nameAleart").classList.remove("d-none");
    document.getElementById("nameAleart").classList.remove("is-valid");
  }
}



var pURLRegex = /([.][a-zA-Z]{2,})$/;       
function validEmail(URLValue) {
  if (pURLRegex.test(URLValue)) {
    document.getElementById("emailId").classList.add("is-valid");
    document.getElementById("emailAleart").classList.add("d-none");
  } else {
    document.getElementById("emailAleart").classList.remove("d-none");
    document.getElementById("emailId").classList.remove("is-valid");
  }
}


var pnoRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;       
function validNo(noValue) {
  if (pnoRegex.test(noValue)) {
    document.getElementById("noId").classList.add("is-valid");
    document.getElementById("noAleart").classList.add("d-none");
  } else {
    document.getElementById("noAleart").classList.remove("d-none");
    document.getElementById("noId").classList.remove("is-valid");
  }
}

var pagRegex = /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/;       
function validag(agValue) {
  if (pagRegex.test(agValue)) {
    document.getElementById("ageId").classList.add("is-valid");
    document.getElementById("agAleart").classList.add("d-none");
  } else {
    document.getElementById("agAleart").classList.remove("d-none");
    document.getElementById("ageId").classList.remove("is-valid");
  }
}















var ppaRegex = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;       
function validpa(paValue) {
  if (ppaRegex.test(paValue)) {
    console.log(paValue)
    document.getElementById("pass").classList.add("is-valid");
    document.getElementById("paAleart").classList.add("d-none");
  } else {
    document.getElementById("paAleart").classList.remove("d-none");
    document.getElementById("pass").classList.remove("is-valid");
  }
}



function validre(reValue){

  let paValue = document.getElementById("pass").value
  if (paValue === reValue){
    console.log("hiiiiiiii")
    document.getElementById("repass").classList.add("is-valid");
    document.getElementById("reAleart").classList.add("d-none");
  } else{
    console.log("hiiiiiiii")
    document.getElementById("reAleart").classList.remove("d-none");
    document.getElementById("repass").classList.remove("is-valid");
  }
}