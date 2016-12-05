$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
	//oculta icono
	$(".icon-arrow-left-alt").hide();
	//Pinta titulo
	printNews();
	//Comenzamos a usar la data
	renderHighlightedRecipes(recipesArray);
});
//Funcion para pintar noticias
function printNews(){
	$('#newsRecipes').text('NUEVAS RECETAS')
}

/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	for(var i= 0;i<recipesArray.length;i++){
		if(recipesArray[i].highlighted==true){
			console.log('Recipes: ', recipesArray[i]);
			var recipe = recipesArray[i];
			renderRecipe(recipe);
		}
	}
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);

	//Creando elementos HTML con JS
	//Contenedor principal
	var aItem = $('<a class="item-recipe" href="#"></a>');
	//Segundo contenedor (titulo)
	var sAttr = $('<span class="attribution"></span>');
	//Titulo
	var sTitle = $('<span class="title-recipe"></span)');
	sTitle.text(recipe.title);
	console.log(recipe.title);
	//Contenedor del autor
	var sMeta = $('<span class="metadata-recipe"></span>)');
	var sAuthor = $('<span class="author-recipe"></span>)');
	sAuthor.text(recipe.source.name);
	//Contenedor icono
	var sBook = $('<span class="bookmarks-recipe"></span');
	var sIco = $('<span class="icon-bookmark"></span>');
	//Imagen
	var img = $('<img/>');
	//img.addClass('myImg');
	img.attr('src', recipe.source.url);

	//unir
	aItem.append(sAttr);
	aItem.append(img);
	sAttr.append(sTitle);
	sAttr.append(sMeta);
	sMeta.append(sAuthor);
	sMeta.append(sBook);
	sBook.append(sIco);

	$('.list-recipes').append(aItem);

}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


