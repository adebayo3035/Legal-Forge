function postToGoogle(){
    var field1 = $("#fullname").val()
    var field2 = $("#email").val()
    var field3 = $("#phone").val()
    var field4 = $("#message").val()

    $.ajax({
        url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdVZsBYpXB71mII2EzSkQN9g-7YOvpmw_qSJ80kOkFyZSTQyQ/formResponse",

        //add the entry point generated number
        data:{
            "entry.12927944": field1,
            "entry.731486663": field2,
            "entry.15946131": field3,
            "entry.1110353788": field4

        },
        type: "POST",
        dataType: "xml",
        success: function(d){
            
            $('#form').trigger('reset')
            const name = document.querySelector('#fullname').value = ""
            const email = document.querySelector('#email').value = ""
            const phone = document.querySelector('#phone').value = ""
            const message = document.querySelector('#message').value = ""
           
        },
        error: function(x,y,z){
            $('#form').trigger('reset')
        }
    });
    return false;
    
}
