enum  Choose{
    Wife, // 默认美剧从0开始
    Mother = 4 ,
    Husband  // 上接4 ===> 5
}

function askquestion(choose:Choose){
    console.log('你老婆和妈妈同时掉水里,你会选择谁')
    console.log(choose)
}

askquestion(Choose["0"]) // Mother

askquestion(Choose["Husband"]) // 5
askquestion(Choose.Husband) // 5