const mongoose = require('mongoose');

const NotesModelSchema = new mongoose.Schema({
    
    noteTitle: {
        type: String,
        required: true,
        trim: true
    },
    noteDescription: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        enum: ['HIGH', 'MEDIUM', 'LOW'],
        default: 'HIGH'
    },
    dateAdded: {
        type: Date,
        default: Date.now()
    },
    dateUpdated: {
        type: Date,
        default: Date.now
    }
});

const NotesModel = mongoose.model("NotesModel", NotesModelSchema);
module.exports = NotesModel;