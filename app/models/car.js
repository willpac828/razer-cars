import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  mileage: DS.attr('number'),
  year: DS.attr('number'),
  seats: DS.attr('number'),
  price: DS.attr('number'),

  cars: DS.belongsTo('brand')
});
