# Exercise 1 : Student Grade Summary

student_grades = {
    "Alice": [88, 92, 100],
    "Bob": [75, 78, 80],
    "Charlie": [92, 90, 85],
    "Dana": [83, 88, 92],
    "Eli": [78, 80, 72]
}

average_grade ={}

for student,grades in student_grades.items():
    average_grade[student] =round(sum(grades)/len(grades),2) 
    print(average_grade)

student_grading = {}

for student, avg in average_grade.items():
    if avg >= 90:
        grade = "A"
    elif avg >= 80:
        grade = "B"
    elif avg >= 70:
        grade = "C"
    elif avg >= 60:
        grade = "D"
    else:
        grade = "F"
    
    student_grading[student] = grade

print(student_grading)


class_average = round(
    sum(average_grade.values()) / len(average_grade), 2
)

print(f"Class Average: {class_average}\n")

for student in average_grade:
    avg = average_grade[student]
    letter = student_grading[student]
    print(f"{student}: Average = {avg}, Grade = {letter}")

# Exercise 2 : Advanced Data Manipulation and Analysis

sales_data = [
    {"customer_id": 1, "product": "Smartphone", "price": 600, "quantity": 1, "date": "2023-04-03"},
    {"customer_id": 2, "product": "Laptop", "price": 1200, "quantity": 1, "date": "2023-04-04"},
    {"customer_id": 1, "product": "Laptop", "price": 1000, "quantity": 1, "date": "2023-04-05"},
    {"customer_id": 2, "product": "Smartphone", "price": 500, "quantity": 2, "date": "2023-04-06"},
    {"customer_id": 3, "product": "Headphones", "price": 150, "quantity": 4, "date": "2023-04-07"},
    {"customer_id": 3, "product": "Smartphone", "price": 550, "quantity": 1, "date": "2023-04-08"},
    {"customer_id": 1, "product": "Headphones", "price": 100, "quantity": 2, "date": "2023-04-09"},
]

total_sales_by_product ={}

for sale in sales_data:
    product = sale['product']
    revenue = sale['price']* sale['quantity']

    if product in total_sales_by_product:
        total_sales_by_product[product]+= revenue 
    else:
        total_sales_by_product[product] = revenue

print("Total Sales by Product")
print(total_sales_by_product)

customer_spending = {}

for sale in sales_data:
    customer_id = sale["customer_id"]
    amount = sale["price"] * sale["quantity"]
    
    if customer_id in customer_spending:
        customer_spending[customer_id] += amount
    else:
        customer_spending[customer_id] = amount

print("\nCustomer Spending:")
print(customer_spending)


for sale in sales_data:
    sale["total_price"] = sale["price"] * sale["quantity"]

high_value_transactions = sorted(
    [sale for sale in sales_data if sale["total_price"] > 500],
    key=lambda x: x["total_price"],
    reverse=True
)

for sale in high_value_transactions:
    print(sale)


purchase_count = {}

for sale in sales_data:
    customer_id = sale["customer_id"]
    purchase_count[customer_id] = purchase_count.get(customer_id, 0) + 1

loyal_customers = [cid for cid, count in purchase_count.items() if count > 1]

print("Loyal Customers:", loyal_customers)


product_totals = {}
product_counts = {}

for sale in sales_data:
    product = sale["product"]
    product_totals[product] = product_totals.get(product, 0) + sale["total_price"]
    product_counts[product] = product_counts.get(product, 0) + 1

average_transaction_value = {
    product: round(product_totals[product] / product_counts[product], 2)
    for product in product_totals
}

print("Average Transaction Value per Product:")
print(average_transaction_value)