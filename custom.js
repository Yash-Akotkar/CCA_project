$("#feedback").validate({
    rules:{
        name{
            minlenght : 2
        }
    },
    messages: {
        required: "Required input",
        minlength: "Name at least 2 characters"
      },

    submitHandler: function(form) {
      form.submit();
    }
   });