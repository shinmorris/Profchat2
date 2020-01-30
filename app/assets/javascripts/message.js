
$(function(){
    $(function(){
      var buildHTML = function(message) {
          let image = ( message.image ) ? `<img class= "lower-message__image" src=${message.image} >` : "";
          let html = `<div class="post-name", data-message-id="${message.id}">
                            <div class="name">
                            ${message.user_name}
                            </div>
                            <div class="date">
                            ${message.created_at}
                            </div>
                          </div>
                          <div class="post">
                            <div class="lower-message__content">
                            ${message.body}
                            </div>
                            ${image}
                          </div>`
        return html;
      };
      $('.new_message').on("submit", function(e){
        e.preventDefault();
        var formData = new FormData(this);
        var url = $(this).attr('action');

        $.ajax({
          url: url,
          type: "POST",
          data: formData,
          dataType: 'json',
          processData: false,
          contentType: false
        })

        .done(function(data){
          var html = buildHTML(data);
          $('.post-name').append(html);
          $('.chat-main__message-list').animate({ scrollTop: $('.chat-main__message-list')[0].scrollHeight});
          $('form')[0].reset();
          $('.form__submit').prop('disabled', false);
        })
        .fail(function() {
          alert("メッセージ送信に失敗しました");
        })
      });

    var reloadMessages = function() {
      last_message_id = $('.post-name:last').data("message-id");
      $.ajax({
        url: "api/messages",
        type: 'GET',
        dataType: 'json',
        data: {id: last_message_id}
      })
      .done(function(messages) {
        if (messages.length !== 0) {
          var insertHTML = '';
          $.each(messages, function(i, message) {
            insertHTML += buildHTML(message)
          });
          $('.post-name').append(insertHTML);
          $('.chat-main__message-list').animate({ scrollTop: $('.chat-main__message-list')[0].scrollHeight});
          $('form')[0].reset();
          $('.form__submit').prop('disabled', false);
        }
      })
      .fail(function() {
      });
    };
    if (document.location.href.match(/\/groups\/\d+\/messages/)) {
      setInterval(reloadMessages, 7000);
    }
  });
});
