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