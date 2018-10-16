
module.exports = function(){
    var cloud = {},words=[];
    cloud.say = function(){
        console.log("hello",cloud)
    }
    cloud.words = function(_) {
        console.log(arguments.length,_);
        return arguments.length ? (words = _, cloud) : words;// 有参数返回cloud变量
      };
    return cloud
}