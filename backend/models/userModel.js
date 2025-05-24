import mongoose from "mongoose";
import { SCHEMES } from '../../frontend/node_modules/uri-js/dist/esnext/uri';
import { name } from '../../frontend/node_modules/eslint/lib/rules/utils/ast-utils';
import { type } from '../../frontend/node_modules/@types/json-schema';

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true, 
        trim: true
    },
    email:{
        type: String,
        required: true, 
        unique: true,
        trim: true
    },
    password:{
        type: String,
        required: true, 
        trim: true
    },
    address:{
        type: String,
        required: true, 
        trim: true
    },
    phone:{
        type: String,
        required: true, 
        trim: true
    },
    role:{
        type: String,
        default: 'user',
        enum: ['user', 'admin']
    },
    avatar:{
        type: String,
        default: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
    },
    favourites:[
        {
            type: mongoose.Types.ObjectId,
            ref: 'books'
        }
    ],
    cart:[
        {
            type: mongoose.Types.ObjectId,
            ref: 'books'
        }
    ],
    wishlist:[
        {
            type: mongoose.Types.ObjectId,
            ref: 'books'
        }
    ],
    orders:[
        {
            type: mongoose.Types.ObjectId,
            ref: 'orders'
        }
    ]
},{timestamps: true})

const User = mongoose.model('users', userSchema);
export default User;