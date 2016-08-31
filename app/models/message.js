import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr('string'),
  type:  DS.attr('string'),

  conversation:  DS.belongsTo('conversation'),

});