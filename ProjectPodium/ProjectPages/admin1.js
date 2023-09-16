firebase.auth().onAuthStateChanged((user)=>{

    if(!user){

        location.replace("../landingpage.html");
    } else {

        document.getElementById("bruh").innerHTML="hello "+user.email;
    }
})

function logout(){
    firebase.auth().signOut()
}