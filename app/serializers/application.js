import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  _shouldSerializeHasMany: function() {
    return true;
  }
});
