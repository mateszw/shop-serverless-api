CREATE TABLE IF NOT EXISTS products (
   id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
   title varchar(255) NOT NULL,
   description DOUBLE PRECISION
)

CREATE TABLE IF NOT EXISTS stocks (
   product_id uuid REFERENCES products (id),
   count integer NOT NULL
)



INSERT INTO products (title,description) VALUES ('Sneakers', 15.32)
INSERT INTO products (title,description) VALUES ('Guitar', 230.32)
INSERT INTO products (title,description) VALUES ('Boots', 30.32)
INSERT INTO products (title,description) VALUES ('Jeans', 52.34)
INSERT INTO products (title,description) VALUES ('Blouse', 60.34)


INSERT into stocks (product_id, count) VALUES ('cc50f616-de42-436d-a943-6031f30f9eda', 2);
INSERT into stocks (product_id, count) VALUES ('666b2dd0-06a1-4f72-b3e5-9aced732f1fd', 1);
INSERT into stocks (product_id, count) VALUES ('157d5d9f-bce0-4691-95d8-1097a4be1b0d', 10);
INSERT into stocks (product_id, count) VALUES ('9dae055c-25fe-440d-ad57-dc673093d80c', 20);
INSERT into stocks (product_id, count) VALUES ('9fa36063-45e0-4d2d-9278-16507133792a', 2);