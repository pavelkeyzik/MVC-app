var UserController = function UserController(userView, userModel) {
    this.userView = userView;
    this.userModel = userModel;
};

UserController.prototype.init = function() {
    this.userView.render(this.userModel);
};