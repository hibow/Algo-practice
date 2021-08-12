/*
The Employee table holds all employees. Every employee has an Id, a salary, and there is also a column for the department Id.

+----+-------+--------+--------------+
| Id | Name  | Salary | DepartmentId |
+----+-------+--------+--------------+
| 1  | Joe   | 70000  | 1            |
| 2  | Jim   | 90000  | 1            |
| 3  | Henry | 80000  | 2            |
| 4  | Sam   | 60000  | 2            |
| 5  | Max   | 90000  | 1            |
+----+-------+--------+--------------+
The Department table holds all departments of the company.

+----+----------+
| Id | Name     |
+----+----------+
| 1  | IT       |
| 2  | Sales    |
+----+----------+
Write a SQL query to find employees who have the highest salary in each of the departments. For the above tables, your SQL query should return the following rows (order of rows does not matter).

+------------+----------+--------+
| Department | Employee | Salary |
+------------+----------+--------+
| IT         | Max      | 90000  |
| IT         | Jim      | 90000  |
| Sales      | Henry    | 80000  |
+------------+----------+--------+

*/

-- Solution inner join + sub query

-- sub query max salary based on department
Select DepartmentId, MAX(salary)
From
    Employee
Group by DepartmentId

-- inner join Department and Employee table where the subquery meets DepartmentId and Salary requirement
Select
  Department.Name AS Department,
  Employee.Name As Employee,
  Salary
From
  Employee
      JOIN
  Department On Employee.DepartmentId = Department.Id
WHERE
  (Employee.DepartmentId, Salary) In
  (Select DepartmentId, MAX(Salary)
    From
       Employee
    Group by DepartmentId
  );
