module.exports = {


  friendlyName: 'Index',


  description: 'Index phonebook.',


  inputs: {

  },


  exits: {

  },


  fn: async function () {
    
    return await new Promise((resolve, reject) => {
      PhoneRow.find().exec(function(err, phoneRows) {
        if(err) {
          reject(err);
        }
        resolve(phoneRows)
      })
    })

  }


};
