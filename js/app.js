FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
    if(response.status== "connected") {
    	console.log("User is logged in");
    	self.location = "http://www.facebook.com";
    }
    console.log(response);
});