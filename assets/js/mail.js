$(document).ready(function(){
  $('#sendMail').submit(function(e){
    e.preventDefault();
    var form = $(this).serializeArray();

    // Send E-mail
    $.ajax({
      method: "POST",
      url: "../../mail.php",
      data: form,
      dataType: "json"
    }).done(function(e){
      $('#msg').html(e.msg);
      $('.alert').removeClass('fade').addClass('alert-danger');

      if(e.status){
        $('#sendMail').each(function(){
          $('.alert').removeClass('alert-danger').addClass('alert-success');
          this.reset();
        });
      }
    });

    return false;
  });
});
