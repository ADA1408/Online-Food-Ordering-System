const mongoose = require('mongoose')

const blog = new mongoose.Schema({
    owner: {
        type: String,
        required: true,
        trim: true
    },
    ownertype: {
        type: String,
        required: true,
        trim: true
    },
    header: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true,
        trim: true
    },
    rating: {
        like: {
            type: Number,
            required: false,
        },
        dislike: {
            type: Number,
            required: false

        },
        comments: {
            date: {
                type: Date
            },
            commenter: {
                type: String
            },
            comment: {
                type: String
            },
            customer_type: {
                type: String
            }
        }
    },
    date: {
        type: Date,
        required: true,
        trim: true
    }
})

module.exports = mongoose.model.Blogg || mongoose.model('Blogg', blog);
