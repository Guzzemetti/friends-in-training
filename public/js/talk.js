


Talk.ready.then(function () {
  var me = new Talk.User({
    id: '123456',
    name: 'Alice',
    email: 'alice@example.com',
    photoUrl: 'https://demo.talkjs.com/img/alice.jpg',
  });
  window.talkSession = new Talk.Session({
    appId: 'tX0AMVh4',
    me: me,
  });
  var other = new Talk.User({
    id: '654321',
    name: 'Sebastian',
    email: 'Sebastian@example.com',
    photoUrl: 'https://demo.talkjs.com/img/sebastian.jpg',
  });

  var conversation = talkSession.getOrCreateConversation(
    Talk.oneOnOneId(me, other)
  );
  conversation.setParticipant(me);
  conversation.setParticipant(other);

  var inbox = talkSession.createInbox({ selected: conversation });
  inbox.mount(document.getElementById('talkjs-container'));
});