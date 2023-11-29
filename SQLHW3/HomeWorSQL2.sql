use w3schools;

-- 1. Вывести самый дорогой товар из категории 4
select * 
from products 
where CategoryID = 4
ORDER BY Price DESC
LIMIT 1 ;

-- 2. Вывести страны поставщиков, кроме поставщика 1
select distinct Country 
from suppliers
where SupplierID <> 1;
 

-- 3. Вывести клиентов из Germany, имена которых начинаются на t
select *
from customers
where Country = "Germany" and CustomerName like "t%";

-- 4. Вывести телефоны перевозчиков
select distinct Phone
from shippers ;

-- Проекция в БД это данные выбранные с учетом ограничений, нужна для уменьшения объема информации передаваемой БД
