module.exports = {
    blog:{
        title:{
            type: String,
            require: true
        },
        author:{
            type: String,
            require: true
        },
        content:{
            type: String,
            require: true
        },
        tag:{
            type: Array,
            // require: true
        },
        time:{
            createAt:{
                type: Date,
                default: Date.now()
            },
            updateAt:{
                type: Date,
                default: Date.now()
            }
        }
    },
    comment:{
        blogId:{
            type: String,
            require: true
        },
        author:{
            type: String,
            require: true
        },
        content:{
            type: String,
            require: true
        },
        time:{
            type: Date,
            default: Date.now()
        }
    },
    user:{
        username:{
            type: String,
            require: true
        },
        password:{
            type: String,
            require: true
        },
        avatar: {
            type: String,
            //require: true
        },
        introduce:{ //一句话简介
            type: String,
            //require: true
        }
        // bio:{//详细介绍（about页面）
        //     type: String,
        //     require: true
        // }
    },
    about:{
        bio:{//详细介绍（about页面）
            type: String,
            require: true
        }
    }
}