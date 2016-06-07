import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('author', params.author_id);
  },

  actions: {
    blurBackground(blur) {
      this.controllerFor('application').set('blur', blur);
    }
  }
});
