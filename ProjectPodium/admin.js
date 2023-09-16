firebase.auth().onAuthStateChanged((user)=>{

    if(!user){

        location.replace("landingpagemodi.html")
    } else {

        document.getElementById("bruh").innerHTML="hello "+user.email;
    }
})

function logout(){
    firebase.auth().signOut()
}