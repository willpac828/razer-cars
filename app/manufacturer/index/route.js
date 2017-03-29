import Ember from 'ember';

// const brands = 'https://razerapi.herokuapp.com/ryan/basic/brands';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('brand');

    // return fetch(brands)
    //   .then(r => r.json());
      // ember automatically waits for the promise to return
      // so we don't need the normal 2 extra lines of code
      // it automatically sends the results to the template
  }
});
