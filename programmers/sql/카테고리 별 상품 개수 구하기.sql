-- https://school.programmers.co.kr/learn/courses/30/lessons/131529
select SUBSTRING(product_code, 1, 2) AS category, count(*) as products
from product
group by category;
