import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  country: DS.attr('string'),
  // Check this
  cars: DS.hasMany('car')
});
