$(function(){
  function buildHTML(){
  if (message.image){
    var html =
    `<div class='post-name'>
    <div class='name'>
    ${message.user_name}
    </div>
    <div class='date'>
    ${message.created_at.strftime('%Y年%m月%d日 %H時%M分')}
    </div>
    <div class='post'>
    <p class = 'lower-message__content'>
    ${message.body}
    </p>
    </div>
      <img src=${message.image} >
    </div>
    </div>`
    return html;
  }else{
    var html =
    `<div class='post-name'>
    <div class='name'>
    ${message.user_name}
    </div>
    <div class='date'>
    ${message.created_at.strftime("%Y年%m月%d日 %H時%M分")}
    </div>
    <div class='post'>
    <p class = "lower-message__content">
    ${message.body}
    </p>
    </div>
    </div>`
    return html;
  }

  }
  $('#form_submit').on("submit", function(e){
  console.log('イベント発火');
  e.preventDefault()
  var formData = new FormData(this);
  var url = $(this).attr('action');
  $.ajax({
    url: url,
    type: "POST",
    date: formData,
    datetype: 'json',
    processData: false,
    contentType: false
  })
  .done(function(data){
    var html = buildHTML(data);
    $('.messages').append(html);
    $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
    $('form')[0].reset();
  })
  });
});
