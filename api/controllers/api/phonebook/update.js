module.exports = {


  friendlyName: 'Update',


  description: 'Update phonebook.',


  inputs: {
    phoneRowId: {
      type: 'string',
      required: true
    },
    name: {
      type: 'string',
      required: true
    },
    phoneNumber: {
      type: 'number',
      required: true,
      maxLenght: 9,
      minLenght: 9
    }
  },


  exits: {

  },


  fn: async function (inputs) {
    var updatedPhoneRow = await PhoneRow.update({
      id: inputs.phoneRowId
    }).set({
      name: inputs.name,
      phoneNumber: inputs.phoneNumber
    })
    // All done.
    return;

  }


};
