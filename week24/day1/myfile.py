# print ("Hello World")
# print(2+5)

# Using if statements 
item_price = float(input("Please enter your item price: "))
if item_price > 1000:
    print("You are elligible for free Shipping")
elif item_price > 500:
    print("You are not elligible for free Shipping")
    print("You will get 10 points")
    print(f"Please add Rs {1000-item_price} for the shipping Fee")
else: 
    print("You are not elligible for free Shipping")
    print(f"Please add Rs {1000-item_price} for the shipping Fee")
vat_rate = 0.15
vat_amount = vat_rate*item_price
final_price = item_price + vat_amount

# Using calculated amount outside the commas 

# print("The Item Price is Rs "+str(item_price))
# print("The Vat Amount is Rs "+str(vat_amount))
# print("The final price is Rs "+str(final_price))

# Using calculated amount inside the commas with {} brace

print(f"The Item Price is Rs {item_price}")
print(f"The Vat Amount is Rs  {vat_amount}")
print(f"The final price is Rs {final_price}")

# Mapilation of the words using upper, lower,replace and split 

# description = "Strings are ....."
# print(description.upper())
# print(description.replace('are','is'))
# print(description.lower()[:7])
