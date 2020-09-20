const not_list = [
    {
        "nameImg" : "img/google-icon.svg",
        "link" : "https://www.google.com.tw/",
        "content" : "來自google的通知，google全新介面開放使用，全新的用戶體驗，新的操作與功能，無廣告，雲端，影音隨你操作"
    },
    {
        "nameImg" : "img/yahoo.png",
        "link" : "https://tw.yahoo.com/",
        "content" : "來自yahoo的通知，yahoo全新介面開放使用，全新的用戶體驗，新的操作與功能，無廣告，雲端，影音隨你操作"
    },
    {
        "nameImg" : "img/youtube_icon.png",
        "link" : "https://www.youtube.com/?gl=TW&tab=r1",
        "content" : "來自youtube的通知，youtube全新介面開放使用，全新的用戶體驗，新的操作與功能，無廣告，雲端，影音隨你操作"
    },
    {
        "nameImg" : "img/ibm.png",
        "link" : "https://www.ibm.com/tw-zh",
        "content" : "來自IBM的通知，IBM全新介面開放使用，全新的用戶體驗，新的操作與功能，無廣告，雲端，影音隨你操作"
    }
]

let notification_card = '';

not_list.map(data => {
    notification_card += `
        <a href="${data.link}" class="notification_single" target="_blank">
            <div class="notleft">
                <div class="notImg">
                    <img src="${data.nameImg}" alt="">
                </div>
            </div>
            <div class="notright">
                <div>${data.content}</div>
            </div>
        </a>
    `
})
document.getElementById('myList').innerHTML = notification_card;

$('.notification').on('click', function(){
    $('.notification_point').hide();
    $('#myList').show();
});
$(document).bind('click', function(e){
    var isFocus = $(e.target);
    // console.log('isFocus', isFocus.parents())
    if(isFocus.parents().length == 0){
        $('#myList').hide();
    }
  });