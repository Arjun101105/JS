function one(){

    const username = "arjun"

    function two(){

        const website = "yoututbe"
        console.log(username);

    }
    // console.log(website); // website wont be executed as it is out of scope
    two() 
}
// one() 

if(true){
    const username = "arjun"
    if(username === "arjun"){
        const website = " youtube"
        console.log(username + website);

    }
    // console.log(website);


}
// console.log(username);