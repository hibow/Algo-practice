/*
Suppose that a website contains two tables, the Customers table and the Orders table. Write a SQL query to find all customers who never order anything.

Table: Customers.

+----+-------+
| Id | Name  |
+----+-------+
| 1  | Joe   |
| 2  | Henry |
| 3  | Sam   |
| 4  | Max   |
+----+-------+
Table: Orders.

+----+------------+
| Id | CustomerId |
+----+------------+
| 1  | 3          |
| 2  | 1          |
+----+------------+
Using the above tables as example, return the following:

+-----------+
| Customers |
+-----------+
| Henry     |
| Max       |
+-----------+

*/

-- solution 1 sub query
Select Name as 'Customers'
from Customers
where Customers.id not in
( Select CustomerId from Orders)

-- Solution 2 left join
Select Name as 'Customers'
from Customers c
  Left Join Orders o
  On c.Id = o.CustomerId
Where o.CustomerId IS NULL