const mongoose = require('mongoose');

module.exports = {
    connect: async () => {
        try {
            // Use the MONGO_URI environment variable for the Atlas connection string
            const mongoURI = process.env.MONGO_URI || 'mongodb://localhost/anonymonous_backend';

            await mongoose.connect(mongoURI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });

            console.log('Connected to MongoDB');
        } catch (error) {
            console.error('Failed to connect to MongoDB:', error);
            process.exit(1); // Exit the process if the connection fails
        }
    }
};
