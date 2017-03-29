import Ember from 'ember';
import config from '../../../config/environment';

export default Ember.Controller.extend({
  formValues: {
    year: '',
    model_name: '',
    mileage: '',
    seats: '',
    price: ''
  },

  actions: {

    save() {

      const car = this.store.createRecord('car', this.formValues);

      car.save()
        .then(() => {
          this.set('formValues', {});
          this.transitionToRoute('manufacturer.car.index');
        })

      // What is this?
      // fetch(`${config.apiUrl}/manufacturers/car`, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'applicaton/json', accept: 'application/json' },
      //   body: JSON.stringify({ ...this.formValues, car_id: this.model.id })
      // }).then(r => r.json())
      //   .then(() => {
      //     this.transitionToRoute('manufacturer.car.index');
      //   });

    },

  }


});
