'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const userSchema = Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  nickname: String,
  birthday: Date,
  major: String,
  email: { type: String, required: true },
  address: String,
  phone: String,
  graduatingClass: String,
  pledgeClass: String,
  status: String,
  family: {
    big: { type: Schema.Types.ObjectId, ref: 'User'},
    siblings: [{ type: Schema.Types.ObjectId, ref: 'User'}],
    littles: [{ type: Schema.Types.ObjectId, ref: 'User'}]
  }
});

const eventSchema = Schema({
  title: { type: String, required: true},
  description: { type: String, required: true},
  location: String,
  createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true},
  coordinatedBy: { type: Schema.Types.ObjectId, ref: 'User' },
  date: {
    from: { type: Date, required: true },
    to: { type:Date, required: true}
  },
  lockDate: Date,
  closeDate: { type:String, required: true },
  attendees: [{
    user: { type: Schema.Types.ObjectId, ref: 'User'},
    comment: String
  }]
});

const recordSchema = Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true }
  event: {
    name: { type: String, required: true },
    eventReference: { type: Schema.Types.ObjectId, ref: 'Event' }
  },
  date: { type: Date, required: true },
  hours: { type: Number, required: true },
  type: { type: String, required: true },
  serviceType: String
});

// userSchema.methods.serialize = function() {
//
// };
//
// eventSchema.methods.serialize = function() {
//
// };
//
// recordSchema.methods.serialize = function() {
//
// };

const Users = mongoose.model('Users', userSchema);
const Events = mongoose.model('Events', eventSchema);
const Records = mongoose.model('Records', recordSchema);

module.exports = { Users, Events, Records };
