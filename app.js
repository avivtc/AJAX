async function init(){
const searchValue= $("#searchValue")
const btn =$("#btn")
const listProducts = $("#listProducts")
function drawCard (product){
    const { name,flag , number } = product
    const card = $("<div></div>")
    card.addClass("card")
    const img = $("<img>")
    img.addClass("card-img-top")
    img.attr('src', flag);
    img.appendTo(card);
    const cardp = $("<div></div>")
    cardp.addClass("card-body")
    cardp.appendTo(card)
    const p = $("<p></p>")
    p.addClass("card-text")
    p.appendTo(cardp)
    p.text(name +" " + number)

    return card
} 
    listProducts.append( drawCard(getCountriesFromServer()))
}
init()

function  getCountriesFromServer () {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "https://restcountries.eu/rest/v2/all",
        }).done(function (data) {
              resolve(data)
              
               
            console.log(searchOnApiByName(data))
            console.log(searchOnApiByFleg(data))
            console.log(searchOnApiByCitizens(data))
        })
    })
}


function searchOnApiByName(dataApi){
    const result = dataApi.filter(item=>item.name)
    const res= result.map(p=>p.name)
    return res
}
function searchOnApiByFleg(dataApi){
    const result = dataApi.filter(item=>item.flag)
    const res= result.map(p=>p.flag)
    return res
}
function searchOnApiByCitizens(dataApi){
    const result = dataApi.filter(item=>item.population)
    const res= result.map(p=>p.population)
    return res
}


