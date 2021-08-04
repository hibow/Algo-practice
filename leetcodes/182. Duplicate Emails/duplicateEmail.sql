-- Write a SQL query to find all duplicate emails in a table named Person.

-- +----+---------+
-- | Id | Email   |
-- +----+---------+
-- | 1  | a@b.com |
-- | 2  | c@d.com |
-- | 3  | a@b.com |
-- +----+---------+
-- For example, your query should return the following for the above table:

-- +---------+
-- | Email   |
-- +---------+
-- | a@b.com |
-- +---------+

DROP TABLE
IF
    EXISTS Person;
CREATE TABLE Person ( Id INT, Email VARCHAR ( 255 ) );
INSERT INTO Person ( Id, Email )
VALUES
    ( 1, 'a@b.com' ),
    ( 2, 'c@d.com' ),
    ( 3, 'a@b.com' );

-- solution1
select Email from 
(
  select Email, count(Email) as num
  from Person
  group by Email
) as statistic
where num > 1;
-- +---------+
--| Email   | num |
-- +---------+
--| a@b.com | 2   |
--| c@d.com | 1   |

-- solution2
select Email from Person
group by Email
havintg count(Email) > 1;