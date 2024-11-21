const mongoose = require('mongoose');

module.exports = {
  connect: async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('MongoDB connected successfully');
    } catch (err) {
      console.error('Failed to connect to MongoDB:', err);
      process.exit(1); // Exit the process with an error
    }
  },
};
