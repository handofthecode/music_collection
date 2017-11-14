var Albums = Backbone.Collection.extend({
  model: Album,
  url: "/album.json"
});