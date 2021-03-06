'use strict';

var mongoose = require('mongoose')
	, Schema = mongoose.Schema;

var userSchema 				= require('./user');

var feedbackDefSchema = new mongoose.Schema({

	title								: { type: String },
	type								: { type: String },  // {session, visit}
	item								: [{
		query							: { type: String },
		mode							: { type: String, lowercase: true, trim: true },  // {freetext, singlechoice, multichoice}
		choices							: [ { type: String, trim: true } ]
	}],
	createBy						: { type: Schema.Types.ObjectId, ref: 'User' },
	createOn						: { type: Date, default: Date.now }
});

module.exports = mongoose.model('feedbackDefs', feedbackDefSchema);