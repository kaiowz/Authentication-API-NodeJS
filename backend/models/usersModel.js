const mongoose = require("mongoose");

const modelSchema = new mongoose.Schema({
    email: String,
    cpf: String,
    phone: String,
    pass: String,
    token: String
});

const modelName = "users";

if (mongoose.connection && mongoose.connection.models[modelName]){
    module.exports = mongoose.connection.models[modelName];
}else{
    module.exports = mongoose.model(modelName, modelSchema);
}