/* Write a SQL query to delete all duplicate email entries in a table named Person, keeping only unique emails based on its smallest Id.

+----+------------------+
| Id | Email            |
+----+------------------+
| 1  | john@example.com |
| 2  | bob@example.com  |
| 3  | john@example.com |
+----+------------------+
Id is the primary key column for this table.
For example, after running your query, the above Person table should have the following rows:

+----+------------------+
| Id | Email            |
+----+------------------+
| 1  | john@example.com |
| 2  | bob@example.com  |
+----+------------------+
Note:

Your output is the whole Person table after executing your sql. Use delete statement. */

# Write your MySQL query statement below

#join table
select p1.*
from Person p1, Person p2
where p1.Email = p2.Email;

#find bigger id having same email address
select p1.*
from Person p1, Person p2
Where p1.Email = p2.Email And p1.Id > p2.Id 


#Alter to delete command -> delete p1 from p1 and p2

DELETE p1 FROM Person p1, Person p2
WHERE p1.Email = p2.Email AND p1.Id > p2.Id


#subquery

delete from Person where id not in( 
    select t.id from (
        select min(id) as id from Person group by email
    ) t
)


delete 
from Person
where 
    id not in (
        select id from 
          (
              select min(id) as id 
              from Person
              group by email
          ) as m 
    );
