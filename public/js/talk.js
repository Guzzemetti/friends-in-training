const req = require('express/lib/request');
const { Model, DataTypes } = require('sequelize');
const router = require('express').Router();

const userlist = [ 
  {
    id: user_id
  }
]



Talk.ready.then(function () {
  var me = new Talk.User({
    id: req.session.user_id,
    name: req.session.first_name,
    email: req.session.email,
    photoUrl: '',
  });
  window.talkSession = new Talk.Session({
    appId: 'tX0AMVh4',
    me: me,
  });
  var other = new Talk.User({
    id: '654321',
    name: 'Sebastian',
    email: 'Sebastian@example.com',
    photoUrl: '',
  });

  var conversation = talkSession.getOrCreateConversation(
    Talk.oneOnOneId(me, other)
  );
  conversation.setParticipant(me);
  conversation.setParticipant(other);

  var inbox = talkSession.createInbox({ selected: conversation });
  inbox.mount(document.getElementById('talkjs-container'));
});