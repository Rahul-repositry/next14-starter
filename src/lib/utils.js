const { default: mongoose } = require("mongoose");

const connection = {};

export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    const db = await mongoose.connect(process.env.MONGOURI);
    connection.isConnected = db.connections[0].readyState;
    console.log("established connection" + db);
  } catch (error) {
    console.log(error);
  }
};
