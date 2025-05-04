CREATE TABLE `user` (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  age INTEGER,
  email TEXT
);

INSERT INTO
  `user` (name, age, email)
VALUES
  ('Jone', 18, 'test1@baomidou.com'),
  ('Jack', 20, 'test2@baomidou.com'),
  ('Tom', 28, 'test3@baomidou.com'),
  ('Sandy', 21, 'test4@baomidou.com'),
  ('Billie', 24, 'test5@baomidou.com');