import Ember from 'ember';
const brands = 'https://razerapi.herokuapp.com/yourname/basic/brands'

export default Ember.Controller.extend({
  formValues: {
    companyName: '',
    isoCountryCode: '',
  },

  actions: {
    save() {
      fetch(brands, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', accept: 'application/json'},
        body: JSON.stringify(this.formValues),
      }).then(r => r.json())
        .then(data => {
          // what we do after the data comes back
          this.transitionToRoute('manufacturers');
        });
    },
  },

});
