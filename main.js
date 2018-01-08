var userModel = new UserModel();
var userView = new UserView();

var userController = new UserController(userView, userModel);

userController.init();
