const mongoose=require("mongoose");
const mongoDB=(URL)=>{
    mongoose.connect(URL);
    mongoose.connection.on("connected", async() => {
        console.log("CONNECTED DB");
        // const fetch_data=await mongoose.connection.test.collection("users");
        // fetch_data.find({}).toArray(function(err,data){
        //     if(err){
        //         console.log(err);
        //     }
        //     else{
        //         global.users=data;
        //         console.log("done");
        //     }
        // })
    });
    mongoose.connection.on("error", () => {
        console.log("CONNECTION ERROR DB");
    });
}

module.exports=mongoDB;