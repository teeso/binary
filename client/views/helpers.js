UI.registerHelper("currentPage", function(path) {
	return Router.current().route.name === path;
});
UI.registerHelper("breaklines", function(text) {
	return text && removeTags(text).replace(/(\r\n|\n|\r)/gm, "<br>");
});
UI.registerHelper("formatDate", function(date) {
	return date && formatDate(date);
});

//pass in an ID from handlebars, and get a collection back
// UI.registerHelper("toCollection", function(context, options) {
// 	if(context && options)
// 		return idToCollection(context, options);
// });











