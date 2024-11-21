const dotenv  = require('dotenv')
dotenv.config()
module.exports = {
    PORT: process.env.PORT || 5000,
    MONGO_URI: process.env.MONGO_URI,
    CORS_ORIGIN: process.env.CORS_ORIGIN,
    TOXICITY_API : process.env.TOXICITY_API
}
