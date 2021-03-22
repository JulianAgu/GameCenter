const storeButton = $('.storeButton'); // Boton comprar del inicio y boton tienda del navbar
const containerIndex = $('#containerIndex'); // Pantalla Inicio
const searchMenu = $('#searchMenu'); // Menu buscar y categorias
const catStore = $('#catStore'); // Menu Categorias
const allItems = $('#allItems'); // Seccion todos los productos
const buttonAll = $('#buttonAll'); // Boton todas los productos
const buttonCat = $('#buttonCat'); 
const btnCategory = $('.btnCategory') // Boton de categorias
const btnRolGames = $('#rpgGamesButton'); // Botones de cada categoria 
const btnFightGames = $('#figthGamesButton');
const btnSportsGames = $('#sportsGamesButton');
const sportsItems = $('#sportsItems'); 

$(searchMenu).hide();
$(catStore).hide();
$(allItems).hide()
$(sportsItems).hide();  

// Funcion que muestra la tienda

$(storeButton).click(function(){
  $(containerIndex).hide()
  $(searchMenu).show();
  $(catStore).show();
  if ($(buttonCat)){
    $(buttonCat).addClass("btn-success");
  }

})

// Boton todos los productos

$(buttonAll).click(function(){
  $(catStore).hide();
  $(allItems).show();
  $(buttonCat).removeClass("btn-success");
  $(buttonAll).addClass("btn-success");
})

// Boton de las categorias

$(buttonCat).click(function(){
  $(catStore).show();
  $(buttonAll).removeClass("btn-success");
  $(".btn[category='fight']").removeClass("btn-success");
  $(".btn[category='rpg']").removeClass("btn-success");
  $(".btn[category='sports']").removeClass("btn-success");
  $(buttonCat).addClass("btn-success");
  if ($(allItems)){
    $(allItems).hide();
  }
})

$(btnCategory).click(function(){
  let cat = $(this).attr('category');
  $(btnCategory).removeClass("btn-success");
  $(buttonAll).removeClass("btn-success");
  $(this).addClass("btn-success");
  $(".item").hide();
  $('.item[category="'+cat+'"]').show();
})

$(".btn[category='all'").click(function(){
  $(".item").show();
  $(".btn[category='fight']").removeClass("btn-success");
  $(".btn[category='rpg']").removeClass("btn-success");
  $(".btn[category='sports']").removeClass("btn-success");
})

$(btnRolGames).click(function(){
  $(catStore).hide();
  $(buttonCat).removeClass("btn-success");
  $(".btn[category='rpg'").addClass("btn-success")
  $(allItems).show()
  $(".item").hide();
  $('.item[category="rpg"]').show();

})

$(btnFightGames).click(function(){
  $(catStore).hide();
  $(buttonCat).removeClass("btn-success");
  $(".btn[category='fight'").addClass("btn-success")
  $(allItems).show();
  $(".item").hide();
  $('.item[category="fight"]').show();

})

$(btnSportsGames).click(function(){
  $(catStore).hide();
  $(buttonCat).removeClass("btn-success");
  $(allItems).show()
  $(".item").hide();
  $('.item[category="sports"]').show();

})