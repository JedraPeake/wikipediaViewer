$(document).ready(function(){
  $('#searchNow').click(function(){
    var searchWord = $('#searchMe').val();
    var searchUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchWord +"&format=json&callback=?";
    console.log(searchUrl);
    $.ajax({
      type:"GET",
      url: searchUrl,
      async:false,
      dataType:"json",
      //returns 3 seperate arrys, title, description, link.
      success: function(data){
        console.log(data);
        $('#results').html('');
        for(var i=0; i<data[1].length; i++){
          $('#results').prepend("<h6><a href="+data[3][i]+">"+data[1][i]+"</a></h6><p>"+data[2][i]+"</p>");
        }
      },
      error: function(error){
        alert("Get Error");
      },

    });

  });

});