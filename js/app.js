$(window).load(
	FB.getLoginStatus(function(response) {
    if(response.status== "connected") {
    	console.log("User is logged in");
    	self.location = "http://www.facebook.com";
    }
    console.log(response);
})
	);