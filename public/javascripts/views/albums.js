var AlbumsView = Backbone.View.extend({
	el: $('#albums'),
  template: Handlebars.compile($('#albums_template').html()),
  render: function() {
    this.$el.html(this.template({ albums: this.collection.toJSON() }));
  },
  initialize: function() {
    this.listenTo(this.collection, "change", this.render);
  },
});