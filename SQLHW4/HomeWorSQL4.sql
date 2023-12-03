use w3schools;

-- 1. Вывести название и стоимость в USD одного самого дорогого проданного товара

select products.ProductName Name, products.Price
from order_details
JOIN products ON products.ProductID =  order_details.ProductID
ORDER BY Price DESC
LIMIT 1 ;

-- 2. Вывести два самых дорогих товара из категории Beverages из USA
select *
from products
JOIN categories ON products.CategoryID =  categories.CategoryID
where categories.CategoryName = "Beverages"
ORDER BY products.Price DESC
LIMIT 2 ;

 

-- 3. Вывести список стран, которые поставляют морепродукты
select suppliers.Country
from suppliers
JOIN products ON products.SupplierID =  suppliers.SupplierID
JOIN categories ON products.CategoryID = categories.CategoryID
WHERE categories.CategoryName = "Seafood"
;



