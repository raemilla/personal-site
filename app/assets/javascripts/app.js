$(document).ready(function(){
  $(".comment-form").on("submit", function(event){
    event.preventDefault();
    $.ajax({
      method: "post",
      url: "/comments",
      data: $(event.target).serialize()
    }).done(function(response){
      $(".comment-author").val("");
      $(".comment-text").val("");
      $(".comment-container").append("<p>"+response.text+"</p><p>posted by "+response.author+" on "+response.created_at+"</p>");
    })
  });

  $('.modal').modal();
  $('.carousel.carousel-slider').carousel({full_width: true});

})
