CREATE TABLE `user` (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  age INTEGER,
  email TEXT
);

INSERT INTO
  `user` (id, name, age, email)
VALUES
  (10001, 'Jone', 18, 'test1@baomidou.com'),
  (10002, 'Jack', 20, 'test2@baomidou.com'),
  (10003, 'Tom', 28, 'test3@baomidou.com'),
  (10004, 'Sandy', 21, 'test4@baomidou.com'),
  (10005, 'Billie', 24, 'test5@baomidou.com');