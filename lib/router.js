Router.configure({
  loadingTemplate: 'loading'
});
Router.route('main',{
  path:'/',
  template: 'main',
  waitOn: function() {
    return Meteor.subscribe('newcollections');
  }/*,
  onBeforeAction: function(){
  	this.next()
  },
  action: function () {
  	console.log(this.params.page + 'asddddddddddddddddddddd');
  	
  }*/
});


Router.route('razdelnyy',{
  path:'/razdelnyy/:name/',
  template: 'razdelnyy',
   waitOn: function() {
    var id = this.params.name;
    return Meteor.subscribe('tovarName', id);
  }/*,
  onBeforeAction: function(){
    this.next()
  },
  action: function () {
    console.log(this.params.page + 'asddddddddddddddddddddd');
    
  }*/
});
/*Router.onBeforeAction('loading', function(){
	this.next();
});*/