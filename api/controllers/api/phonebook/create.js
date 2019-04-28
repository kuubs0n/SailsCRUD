module.exports = {


  friendlyName: 'Create',


  description: 'Create phonebook.',


  inputs: {
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
    var phoneBookRow = await PhoneRow.create({
      name: inputs.name,
      phoneNumber: inputs.phoneNumber
    });

    // All done.
    return;

  }


};
