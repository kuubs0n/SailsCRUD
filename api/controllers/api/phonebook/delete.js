module.exports = {


  friendlyName: 'Delete',


  description: 'Delete phonebook.',


  inputs: {
    phoneRowId: {
      type: 'string',
      required: true
    }
  },


  exits: {

  },


  fn: async function (inputs) {
    var phoneRows = await PhoneRow.destroy({
      id: inputs.phoneRowId
    });
    // All done.
    return phoneRows;

  }


};
