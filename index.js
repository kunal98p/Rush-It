  (function() {

    var config = {
    apiKey: "AIzaSyAvpxZObeqmKcFEQCVy1Zb5eaUo-hjpXhc",
    authDomain: "management-a62a2.firebaseapp.com",
    databaseURL: "https://management-a62a2.firebaseio.com",
    projectId: "management-a62a2",
    storageBucket: "management-a62a2.appspot.com",
    messagingSenderId: "972960577898"
  };
  firebase.initializeApp(config);

  //Get Emements
  const preObject = document.getElementById('object');

  //Create refernce
   const dbRefObject = firebase.database().ref().child('object');

   //sync objeet changes

   dbRefObject.on('value',snap => {
    preObject.innerText = JSON.stringify(snap.val(),null,3);
   });

 }());