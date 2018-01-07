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