/*

Write a SQL query to get the nth highest salary from the Employee table.

+----+--------+
| Id | Salary |
+----+--------+
| 1  | 100    |
| 2  | 200    |
| 3  | 300    |
+----+--------+
For example, given the above Employee table, the nth highest salary where n = 2 is 200.

Edge case: !!! If there is no nth highest salary, then the query should return null.

+------------------------+
| getNthHighestSalary(2) |
+------------------------+
| 200                    |
+------------------------+

*/

-- Limit 1 Offset N-1
CREATE FUNCTION getNthHighestSalary ( N INT ) RETURNS INT BEGIN
SET N = N -1;
RETURN (
  Select (
    Select DISTINCT Salary
    From Employee
    Order By Salary DESC
    Limit 1 OFFSET N
-- it can be written as LIMIT M, 1
  )
);

END