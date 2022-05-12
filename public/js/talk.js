var e = document.getElementById("friends-input");

var submitButton = document.getElementById("submit-button");

addEventListener("click", submitButton);

// var userId = e.value;

// var userName = e.options[e.selectedIndex].text;  


const userlist = [ 
  {
    id: 1,
    name: "Johnny Gree",
  },
  {
    id: 2,
    name: "Sandra Brown",
  },
  {
    id: 3,
    name: "Sophia Karnes",
  },
  {
    id: 4,
    name: "Sal Bologna",
  },
  {
    id: 5,
    name: "Rad Thad",
  },
  {
    id: 6,
    name: "Amanda Bynes",
  },
  {
    id: 7,
    name: "Lawrence Culver",
  },
  {
    id: 8,
    name: "Michelle Greene",
  },
  {
    id: 9,
    name: "Joey Tirado",
  },
  {
    id: 10,
    name: "Jeff Little",
  }
]



Talk.ready.then(function () {
  var me = new Talk.User({
    id: "4",
    name: "Sal Bologna",
  });
  window.talkSession = new Talk.Session({
    appId: 'tX0AMVh4',
    me: me,
  });
  var other = new Talk.User({
    id: "2",
    name: "Sandra Brown",
    welcomeMessage: "Hey, do you work out at Gold's Gym?",
  });

  var conversation = talkSession.getOrCreateConversation(
    Talk.oneOnOneId(me, other)
  );
  conversation.setParticipant(me);
  conversation.setParticipant(other);

  var inbox = talkSession.createInbox({ selected: conversation });
  inbox.mount(document.getElementById('talkjs-container'));
});