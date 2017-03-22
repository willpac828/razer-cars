import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // instead of the routes array in vue
  // these are automatically added for us!
  this.route('index');
  this.route('manufacturers');
  this.route('manufacturers-new');
});

export default Router;
