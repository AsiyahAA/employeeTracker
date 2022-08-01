INSERT INTO departments (department_name)
VALUES  ("Accounting"),
        ("Legal"),
        ("Engineering"),
        ("Human Resources"),
        ("Management");

INSERT INTO roles (title, salary, department_id)
VALUES  ("Accountant", "90000", 1),
        ("Lawyer", "110000", 2),
        ("Software Engineer", "105000", 3),
        ("Hiring", "80000", 4),
        ("CFO", "300000", 5);

INSERT INTO employees (first_name, last_name, role_id)
VALUES  ("Steve", "Rogers", 1),
        ("Natasha", "Romanoff", 2),
        ("Peter", "Parker", 3),
        ("Phil", "Coulson", 4),
        ("Tony", "Stark", 5);