# Exercise 1: Favorite Numbers

my_fav_numbers ={2,10,22,19,4,31,94,96}
my_fav_numbers.add(40)
my_fav_numbers.add(66)
my_fav_numbers.remove(66)
print(my_fav_numbers)

friend_fav_numbers={69,45,23,31,3,88,22}

our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print(our_fav_numbers)

# Exercise 2: Tuple
my_tuple1=(1,2,3)
# my_tuple1.add(5) # Not working 

# Exercise 3: List Manipulation
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0,"Apples")
count_apples =basket.count("Apples")


print(basket)

#  Exercise 4: Floats
# Float stores decimal places and Integer stores whole number s

current_number = 1.5
numbers=[]
while current_number <= 5:    
    numbers.append(current_number) 
    current_number += 0.5
print(numbers)  

# Exercise 5: For Loop

numbers = range(1, 21)
for number in numbers:
  print(number)

numbers = range(1, 21)
for number in numbers:
  if number%2==0:
    print(number)


#  Exercise 6: While Loop
user_input = input("Please enter your name: ").strip()

while user_input == "" or any(char.isdigit() for char in user_input) or len(user_input) < 3:
    # print("Please enter a proper name")
    user_input = input("Please enter your name: ").strip()
print("Thank you,", user_input)

#  Exercise 7: Favorite Fruits

favorite_fruits = []

user_input = input("Please enter your favorite fruits (separated by spaces): ").strip()

fruits = user_input.split()

for fruit in fruits:
    if fruit == "" or any(char.isdigit() for char in fruit) or len(fruit) < 3:
        print(f"Invalid fruit: {fruit}")
    else:
        favorite_fruits.append(fruit)

print(favorite_fruits)

# Exercise 8: Pizza Toppings
all_toppings = []
base_price = 10
topping_price = 2.5

while True:
    user_input = input("Enter a pizza topping (type 'quit' to stop): ").strip()

    if user_input.lower() == "quit":
        break

    print(f"Adding {user_input} to your pizza.")
    all_toppings.append(user_input)


total_cost = base_price + (len(all_toppings) * topping_price)

print("\n--- Order Summary ---")
print("Toppings added:", all_toppings)
print(f"Total cost: ${total_cost:.2f}")

#  Exercise 9: Cinemax Tickets

ages = []
ticket_prices = []
total_cost = 0

num_people = int(input("How many family members need tickets? ").strip())

for i in range(1, num_people + 1):
    age = int(input(f"Enter the age of person {i}: ").strip())
    ages.append(age)

    if age < 3:
        print("Entry is free.")
        cost = 0
    elif 3 <= age <= 12:
        print("Your price is $10.")
        cost = 10
    else:
        print("Your price is $15.")
        cost = 15

    ticket_prices.append(cost)
    total_cost += cost

print("\n--- Summary ---")
print("Ages:", ages)
print("Ticket prices:", ticket_prices)
print(f"Total ticket cost for the family: ${total_cost}")