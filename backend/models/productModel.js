import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type:String, required:true, trim:true,
    },
    price:{
        type:String, required:true, trim:true
    },
    description:{
        type:String, required:true,
    },
    image:{
        type:[String], required:true,
    },
    category:{
        type:String, required:true, trim:true
    },
    subCategory:{
        type:String, required:true, trim:true
    },
    sizes:{
        type:Array, required:true,
    },
    bestseller:{
        type:Boolean
    },
    date:{
        type:Date, required:true,
    }
})

const ProductModel = mongoose.model("product", productSchema)

export default  ProductModel;

