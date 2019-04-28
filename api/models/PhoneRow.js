/**
 * PhoneRow.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'PhoneRow',
  datastore: 'mongodb',
  primaryKey: 'id',
  
  attributes: {
    name: {
      type: 'string',
      required: true,
    },
    phoneNumber: {
      type: 'number',
      required: true
    },
  }
}

