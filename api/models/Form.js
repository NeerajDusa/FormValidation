const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, maxLength: 10, validate(value){
        let isvalname = false;
        var regex = /^[a-zA-Z]*$/;
        isvalname = regex.test(value);
        if(!isvalname){
            throw new Error("Invalid name");
        }
    }},
    description : { 
        type: String, required: true, maxLength: 1000 
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Form", FormSchema);
