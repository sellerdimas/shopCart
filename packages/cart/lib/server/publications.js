Meteor.publish("Cart-userOrders", function () {
	check(arguments, [Match.Any]);
	if(this.userId){
		return [
			Cart.Items.find({userId:this.userId})
		];
	}
	this.ready();
});

Meteor.publish("Cart-deviceOrders", function(deviceId){
	check(arguments, [Match.Any]);
	if(deviceId){
		return [
			Cart.Items.find({deviceId:deviceId})
		];
	}
	this.ready();
});





Meteor.methods({
  OrderCart: function (orders) {
    var date = new Date();
    var options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
      timezone: 'UTC',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    };
   OrdersCart.insert({
            Orders: orders + '\n' + orders
           
        });  
  }
});