import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    limit: {
      refreshModel: true
    }
  },

  model(params) {
    return this.store.query('book', params);
  },

  actions: {
    showAll() {
      this.transitionTo({ queryParams: { limit: total }});
    },

    blurBackground(blur) {
      this.controllerFor('application').set('blur', blur);
    }
  }
});
