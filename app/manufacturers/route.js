import Ember from 'ember';

const brands = 'https://razerapi.herokuapp.com/will/basic/brands';

export default Ember.Route.extend({
  model() {
    return fetch(brands)
      .then(r => r.json())

  }
});
