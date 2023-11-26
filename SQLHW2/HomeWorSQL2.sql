use w3schools;

-- 1. Вывести товары из категорий 1 и 4 с ценой от 50 до 150 EUR
select * 
from products 
where CategoryID in (1 ,4) and Price between 50 and 150 ;

-- 2. Вывести товары (проекция: название, ценасоскидкой0.5процента)
select ProductName Name, Price*0.995 "Discounted price " 
from products; 

-- 3. Вывести заказы менеджеров 2 и 5
select *
from orders
where EmployeeID in (2,5);

-- Проекция в БД это данные выбранные с учетом ограничений, нужна для уменьшения объема информации передаваемой БД
