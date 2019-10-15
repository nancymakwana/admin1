var db=require("../dbconnection");
var user={
getAllUser:function(callback){
    return db.query('select * from user_tbl',callback);
},
deleteUser: function (uid, callback) {
    return db.query('delete from user_tbl where uid=?', [uid], callback);
},
getUserById: function (uid, callback) {
    return db.query('select * from user_tbl where uid=?', [uid], callback);
},
UpdateUser:function(item,callback)
{
    return db.query('update user_tbl  set  name=?,email=?,password=?,type=? where uid=?'
    ,[item.name,item.email,item.password,item.type,item.uid],callback);
}
};
module.exports=user;