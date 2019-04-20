// Initialize Firebase
  var config = {
    apiKey: "AIzaSyD73sT69E7qtwjrRRG1mVn1_FRBSDHxb5Y",
    authDomain: "profilegithubio.firebaseapp.com",
    databaseURL: "https://profilegithubio.firebaseio.com",
    projectId: "profilegithubio",
    storageBucket: "profilegithubio.appspot.com",
    messagingSenderId: "222453668265"
  };
  firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('submit').addEventListener("submit", submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  //Get value
  var name = getInputVal('name');

  var email = getInputVal('email');

  var message = getInputVal('message');

  // Save message
  saveMessage(name, email,message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('form').reset();
}

// Function to get form value
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    message: message
  });
}
