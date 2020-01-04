const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://new-user:l1QCeNVZdBio1rSU@cluster0-y8hdl.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const parameters = {
    title: {
        type: String,
        required: true
    },
    organization: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Boolean,
        required: true
    },
    likes: {
        type: Number,
        required: true
    },
    languages: {
        type: Array,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}

const SoftwareToolRequest = mongoose.model("SoftwareToolRequests", parameters)

const SoftwareTool = mongoose.model("SoftwareTools", parameters)

module.exports = {
    SoftwareToolRequest: SoftwareToolRequest,
    SoftwareTool: SoftwareTool
};