/*
176. Second Highest Salary
Easy

599

324

Favorite

Share
SQL Schema
Write a SQL query to get the second highest salary from the Employee table.

+----+--------+
| Id | Salary |
+----+--------+
| 1  | 100    |
| 2  | 200    |
| 3  | 300    |
+----+--------+
For example, given the above Employee table, the query should return 200 as the second highest salary.

edge case:!!! If there is no second highest salary, then the query should return null.

+---------------------+
| SecondHighestSalary |
+---------------------+
| 200                 |
+---------------------+

edge case: only one record, avoid null
*/

-- solution1: it will have issue with nth highest
SELECT max(Salary) as SecondHighestSalary from Employee
Where Salary not in (select max(Salary) from Employee)

-- solution2: join
select Max(a.Salary) as SecondHighestSalary
From Employee a
join Employee b
  on a.Salary < b.Salary;


-- Solution 3: Limit 1 Offset N-1 with IFNULL

SELECT
    IFNULL(
      (SELECT DISTINCT Salary
       FROM Employee
       ORDER BY Salary DESC
        LIMIT 1 OFFSET 1),
    NULL) AS SecondHighestSalary


SELECT
    (SELECT DISTINCT
            Salary
        FROM
            Employee
        ORDER BY Salary DESC
        LIMIT 1 OFFSET 1) AS SecondHighestSalary
;