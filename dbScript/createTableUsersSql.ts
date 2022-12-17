let sqlCreateUsers = "CREATE TABLE users(";
    sqlCreateUsers += "id int primary key auto_increment,";
    sqlCreateUsers += "username varchar(255),";
    sqlCreateUsers += "password varchar(255),";
    sqlCreateUsers += "firstname varchar(255),";
    sqlCreateUsers += "lastname varchar(255),";
    sqlCreateUsers += "email varchar(255),";
    sqlCreateUsers += "image text,";
    sqlCreateUsers += "role varchar(255),";
    sqlCreateUsers += "UNIQUE (email)";
    sqlCreateUsers += ")";

export default sqlCreateUsers;