var UserModel = function UserModel() {

    this.xhttp = new XMLHttpRequest();

};

UserModel.prototype.getUsers = function(cb) {

    this.xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };

    this.xhttp.open('GET', 'data/users.json');
    this.xhttp.send();
};
var UserView = function UserView() {

    this.element = document.getElementById('users');

};

UserView.prototype.render = function(viewModel) {
    var self = this;
    viewModel.getUsers(function(data) {
        var templateString = '';

        for (var item of data) {
            templateString += '<li>' + item.name + ' (' + item.year + ' years old)' + '</li>';
        }
        
        self.element.innerHTML = templateString;
    });
};
var UserController = function UserController(userView, userModel) {
    this.userView = userView;
    this.userModel = userModel;
};

UserController.prototype.init = function() {
    this.userView.render(this.userModel);
};
var userModel = new UserModel();
var userView = new UserView();

var userController = new UserController(userView, userModel);

userController.init();
