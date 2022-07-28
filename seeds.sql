INSERT INTO departments (id, department_name)
VALUES  (001, "Accounting"),
        (002, "Legal"),
        (003, "Engineering"),
        (004, "Human Resources"),
        (005, "Management");

INSERT INTO roles (id, title, salary)
VALUES  (001, "Accountant", "90000"),
        (002, "Lawyer", "110000"),
        (003, "Software Engineer", "105000"),
        (004, "Hiring", "80000"),
        (005, "CFO", "300000");

INSERT INTO employees (id, first_name, last_name, department_name, title, salary, manager_name)
VALUES  (001, "Steve", "Rogers", "Accounting", "Accountant", "90000", "Nicky Fury"),
        (002, "Natasha", "Romanoff", "Legal", "Lawyer", "110000", "Nick Fury"),
        (003, "Peter", "Parker", "Engineering", "Software Engineer", "105000", "Nick Fury"),
        (004, "Phil", "Coulson", "Human Resources", "Hiring", "80000", "Nick Fury"),
        (005, "Tony", "Stark", "Management", "CFO", "300000", "Nick Fury");