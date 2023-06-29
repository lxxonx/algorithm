-- https://school.programmers.co.kr/learn/courses/30/lessons/77487
SELECT ID, NAME, HOST_ID
FROM PLACES
WHERE HOST_ID IN (SELECT HOST_ID
				FROM PLACES
				GROUP BY HOST_ID
				HAVING COUNT(*) > 1)
