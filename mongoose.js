const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect('mongodb://127.0.0.1:27017/task', {
    useNewUrlParser : true,
      useCreateIndex : true
});

const mongooseModel = mongoose.model('User', {
    'name': {
       type: String,
       required: true,
       trim:true
    },
    'age': {
       type: Number,
       default: 0
    },
    password: {
        type: String,
        required: true,
        trim: true,
        maxLength: 15,
        lowercase: true,
        validate(value) {
           if(value.includes('password')){
               throw new Error("Invalid Password");
           } 
        } 
    }
});

const me = new mongooseModel({
   name: 'Shelam    ',
    password:'word'
});

me.save().then((result)=>{
    console.log("Saved");
console.log(result);
}).catch((error)=>{
console.log("Error");
console.log(error);
})