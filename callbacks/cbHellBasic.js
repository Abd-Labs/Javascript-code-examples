function thing1(callback){
    console.log("Thing 1")
    callback();
}
function thing2(callback){
    console.log("Thing 2")
    callback();
}
function thing3(){
    console.log("Thing 3")

}

thing1(function(){
    thing2(function(){
        thing3()
    })
})