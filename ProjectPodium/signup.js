const signupForm=document.getElementById("signin-form");
signupForm.addEventListener("submit",(e)=>{

    e.preventDefault();


})
function signin(){

    const email=document.getElementById("regEmail").value;
    const password=document.getElementById("regPassword").value;

    firebase.auth().createUserWithEmailAndPassword(email,password).then(cred=>{

        console.log(cred);
    })
}
firebase.auth().onAuthStateChanged((user)=>{

    if(user){

        location.replace("index.html");
    }
    })