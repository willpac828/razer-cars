import Ember from 'ember';
import config from 'razer-cars/config/environment';

export default Ember.Route.extend({

  model() {
    // huh?
    const id = this.paramsFor('manufacturer.car').id;

    return fetch(`${config.apiUrl}/manufacturers/${id}`)
      .then(r => r.json());

  }
})
