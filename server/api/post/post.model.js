'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PostSchema = new Schema({
	name: String,
	info: String,
	active: Boolean,
	title: { type: String, required: true },
	tags: [ {type: String} ],
	is_published: { type: Boolean, default: false },
	content: { type: String, required: true },
	created: { type: Date, default: Date.now },
	updated: { type: Date, default: Date.now },
	read: { type: Number, default: 0 },
	likes: { type: Number, default: 0 }
});

module.exports = mongoose.model('Post', PostSchema);