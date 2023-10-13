# https://techplay.jp/column/1742

```sql
CREATE TABLE Customers (
    CustomerID   integer PRIMARY KEY,
    CustomerName varchar(40),
    City         varchar(40)
);
```
| CustomerID | CustomerName | City       |
|------------|--------------|------------|
| 1          | Alice        | New York   |
| 2          | Bob          | Los Angeles|
| 3          | Carol        | Chicago    |

```sql
CREATE TABLE Orders (
    OrderID    integer PRIMARY KEY,
    CustomerID integer,
    OrderDate  date
);
```
| OrderID | CustomerID | OrderDate |
|---------|------------|-----------|
| 101     | 1          | 2023-07-15|
| 102     | 2          | 2023-07-16|
| 103     | 1          | 2023-07-17|

# https://techplay.jp/column/1743
```sql
CREATE TABLE Customers (
    CustomerID   integer PRIMARY KEY,
    CustomerName varchar(40),
    City varchar(40)
);
```
| CustomerID | CustomerName | City  |
|------------|--------------|-------|
| 1          | Alice        | Tokyo |
| 2          | Bob          | Osaka |
| 3          | Carol        | Aichi |

```sql
CREATE TABLE Orders (
    OrderID    integer PRIMARY KEY,
    CustomerID integer,
    OrderDate  date
);
```
| OrderID | CustomerID | OrderDate  |
|---------|------------|------------|
| 101     | 1          | 2023-07-15 |
| 102     | 2          | 2023-07-16 |
| 103     | 3          | 2023-07-17 |

```sql
CREATE TABLE Products (
    ProductID    integer PRIMARY KEY,
    ProductName  varchar(40),
    Price        integer
);
```
| ProductID | ProductName | Price   |
|-----------|-------------|---------|
| 1         | Laptop      | 1000    |
| 2         | Smartphone  | 800     |
| 3         | Tablet      | 500     |
