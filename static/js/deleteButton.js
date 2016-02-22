$(document).ready(function(){
    $('.delete-btn').click(function(e) {
        e.preventDefault();
        var url = $(this).attr('href');
        $.ajax({
            url: url,
            method:'DELETE'
        }).done(function(data){
            window.location.assign('/plays');
        });
    });
});
