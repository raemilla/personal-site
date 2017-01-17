$(document).ready(function(){
  $(".comment-form").on("submit", function(event){
    event.preventDefault();
    $.ajax({
      method: "post",
      url: "/comments",
      data: $(event.target).serialize()
      // {
      //   author: $(".comment-author").val(),
      //   text: $(".comment-text").val(),
      //   post_id: $(".post-id").val()
      // }
    }).done(function(response){
      $(".comment-author").val("");
      $(".comment-text").val("");
      $(".comment-container").append("<p>"+response.text+"</p><p>posted by "+response.author+" on "+response.created_at+"</p>");
    })
  });

  $('#modal1').modal();
  $('#modal2').modal();
})
