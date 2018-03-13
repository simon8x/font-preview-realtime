   $(document).ready(function(){
    $("#input_text").html($("input[name='message']").val());

     var test_text = jQuery("input[name='message']").val();
     $(".user_text").html( test_text );

    $("input[name='message']").keypress(function() {
      var test_text = jQuery("input[name='message']").val();
      $(".user_text").html( test_text );
    });

    $("input[name='message']").change(function() {
      var test_text = jQuery("input[name='message']").val();
      $(".user_text").html( test_text );
    });

    $('#input-text').on('input change keyup', function () {
         var test_text = jQuery("input[name='message']").val();
      $(".user_text").html( test_text );
    });
  });
