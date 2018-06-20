

        $.ajax({
            type: 'GET',
            url: "http://localhost:3064/test",
            success: function (data) {
                console.log(data);
                var liste = data.list
                liste.forEach(function(liste){
                    console.log(liste);
                    $('#m').append( '<p>' + "" + liste.name + '<br/>' + 'température : ' +  liste.main.temp + '</p>')
                })
               
               
            },
 
});  
