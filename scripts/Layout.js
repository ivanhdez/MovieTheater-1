

$(document).ready(function(){

	$(function () {
	  $('[data-toggle="tooltip"]').tooltip();
	})

	if(document.cookie.indexOf('c=') == -1)
	{

		jQuery.ajax({
		'type':'POST',
		'data':{},
		'url':'/MovieTheater/index.php/site/Cookie',
		'cache':false,
		success: function(response){
			debugger
	   		setCookie('c',response.Cookie,1);
	   		var a = document.cookie;
			alert(getCookie('c'));
	  	},
	 	 error: function(xhr){
	      	alert("failure: "+xhr.readyState+this.url)

	    	  }
		});
	}

	$("#cPassword").keyup(function(event){
	    if(event.keyCode == 13){
	        $("#LoginBtn").click();
	    }
	});

	$("#IniciarSesion").click(function(){
		$("#ModalLogIn").modal('show');
	});

	$("#LoginBtn").click(function(){

		params = {
			cEmail : $("#cEmail").val(),
			cPassword : $("#cPassword").val()
		};

		jQuery.ajax({
			'type':'POST',
			'data':params,
			'url':'/MovieTheater/index.php/site/Login',
			'cache':false,
			success: function(response){
	      		debugger
	       		if(response.result)
	       			location.reload();
	       		else
	       			alert('error');

          	},
	     	error: function(xhr){
		      	alert("failure: "+xhr.readyState+this.url)

    	  	}
		});



	});

	$("#LogoutBtn").click(function(){

		jQuery.ajax({
			'type':'POST',
			'data':{},
			'url':'/MovieTheater/index.php/site/Logout',
			'cache':false,
			success: function(response){
	      	debugger
	       		if(response.result)
	       			location.reload();
	       		else
	       			alert('error');

          	},
	     	 error: function(xhr){
		      	
		      	alert("failure: "+xhr.readyState+this.url)

		    	  }
			});



	});


});


function setCookie(cname, cvalue, days) {
     if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(60*60*1000));
        var expires = "; expires="+date.toGMTString()+';';
    }
    
    document.cookie = cname+"="+cvalue+expires;
}

function getCookie(name) {
	var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}