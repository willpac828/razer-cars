import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // instead of the routes array in vue
  // these are automatically added for us!

  // by adding the function argument, the index route is auto-generated
  this.route('manufacturer', { path: '/manufacturers'}, function() {
    this.route('new');
    this.route('car', { path: '/:id'}, function() {
      this.route('new');
    });
  });

  this.route('manufacturers-new');
  this.route('edit');
});

export default Router;
