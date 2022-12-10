let sqlCreateComments = "CREATE TABLE comments(";
    sqlCreateComments += "id int primary key auto_increment,";
    sqlCreateComments += "postId int,";
    sqlCreateComments += "author varchar(255),";
    sqlCreateComments += "email varchar(255),";
    sqlCreateComments += "content text,";
    sqlCreateComments += "status varchar(255) DEFAULT 'unapproved'";
    sqlCreateComments += ")";

export default sqlCreateComments;