$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
	//La varuable "activitiesArray" esta declarada en el archivo "data/recipes.js"
	renderActivities(activitiesArray);
	//oculta icono
	$(".icon-arrow-left-alt").hide();
	//Pinta titulo
	printNews();
	//Comenzamos a usar la data
	//renderHighlightedRecipes(recipesArray);
});
//Funcion para pintar un titulo
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
			console.log('Recipes: ', i);
			renderRecipe(recipesArray[i]);
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
	//console.log(recipe.title);
	//Contenedor del autor
	var sMeta = $('<span class="metadata-recipe"></span>)');
	var sAuthor = $('<span class="author-recipe"></span>)');
	sAuthor.text(recipe.source.name);
	//Contenedor icono
	var sBook = $('<span class="bookmarks-recipe"></span');
	var sIco = $('<span class="icon-bookmark"></span>');
	//Imagen
	var img = $('<img/>');
	img.attr('src', 'img/recipes/320x350/'+recipe.name+'.jpg');

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
	for(var i= 0;i<activitiesArray.length;i++){
		console.log('Activities: ', activitiesArray[i]);
		renderActivity(activitiesArray[i]);
	}
	//Validación
	if(activitiesArray.length>0){
			console.log("Esconde DIV con clase wrapper-message");
			$(".wrapper-message").hide();
	}
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(activity) {
	console.log('Voy a pintar la actividad: ', activity);

	var template =
	'<a href="#" class="item-activity">' + 
		'<span class="attribution">' +
			'<span class="avatar">' +
      			'<img src="<%= activity.userAvatar %>" class="image-avatar">'+
    		'</span>'+
    		'<span class="meta">'+
		      '<span class="author"><%= activity.userName %></span> made'+ 
		      '<span class="recipe"><%= activity.recipeName %></span> <%= activity.text %>)'+ 
		      '<span class="location">&mdash; <%= activity.place %></span>'+
		    '</span>' +
		'</span>' +
		'<div class="bg-image" style="background-image: url(&quot;<%= activity.image %>&quot;)"></div>'+
	'</a>';

	var compiled = _.template(template);
    var a = compiled ({activity:activity});
    console.log(a);

    var elemento = $(a);
    $('.list-activities').append(elemento);
}