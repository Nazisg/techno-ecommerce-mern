const mongoose = require('mongoose');

 
const connect = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI);
      console.log('Database Connected Successfully');  
    } catch (error) {
        throw error;
    };
};  

module.exports = connect;