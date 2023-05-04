$(document).ready(function() {
    // Handle form submission
    $('#booking-form').submit(function(event) {
      event.preventDefault();
      var formData = $(this).serialize();
      $.ajax({
        type: 'POST',
        url: 'booking.php',
        data: formData,
        success: function(response) {
          $('#booking-form').hide();
          $('#booking-success').removeClass('d-none');
        }
      });
    });
  });
  