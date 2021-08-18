/*
Mary is a teacher in a middle school and she has a table seat storing students' names and their corresponding seat ids.

The column id is continuous increment.

Mary wants to change seats for the adjacent students.

Can you write a SQL query to output the result for Mary?



+---------+---------+
|    id   | student |
+---------+---------+
|    1    | Abbot   |
|    2    | Doris   |
|    3    | Emerson |
|    4    | Green   |
|    5    | Jeames  |
+---------+---------+
For the sample input, the output is:

+---------+---------+
|    id   | student |
+---------+---------+
|    1    | Doris   |
|    2    | Abbot   |
|    3    | Green   |
|    4    | Emerson |
|    5    | Jeames  |
+---------+---------+
Note:

If the number of students is odd, there is no need to change the last one's seat.
*/

-- solution1 flow control statement case
/*
use case to get changed id
  if i < counts, i is odd -> id + 1; i is even -> id - 1
  if i = counts, i is odd -> id no change; i is even -> id - 1
and their studenets
 from
 seat table, seat_counts -> counts from seat
 order by id ASC
*/
Select
  ( CASE
      WHEN MOD(id, 2) != 0 AND counts != id THEN id + 1
      WHEN MOD(id, 2) != 0 AND counts = id THEN id
      ELSE id -1
  END) AS id,
  student
FROM
  seat,
  (SELECT
    COUNT(*) AS counts
    FROM
        seat) AS seat_counts
ORDER BY id ASC;

-- solution 2 : using two UNION
/*(change even rows id)
get all the even numbered rows as odd numbered rows
*/
Select s1.id - 1 as id, s1.student
FROM seat s1
WHERE s1.id MOD 2 = 0

UNION
/* change odd rows id except last row*/
SELECT s2.id + 1 as id, s2.student
FROM seat s2
WHERE s2.id MOD 2 = 1 AND s2.id != (SELECT MAX(id) FROM seat)

UNION
/* get the last row if odd and don't change the id value*/
SELECT s3.id, s3.student
FROM seat s3
WHERE s3.id MOD 2 = 1 AND s3.id = (SELECT MAX(id) FROM seat)

/*Order the result by id */
ORDER BY id ASC;
