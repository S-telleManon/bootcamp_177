# Exercise1
print ("Hello World\n"*4)

# Exercise2
print((99**3)*8)

# Exercise3
print(5 < 3)
print(3 == 3)
print(3 == str(3))
print(int("3") > 3)
print("Hello" == "hello")

# Exercise4
computer_brand = "Hp"
print(f'I have a {computer_brand} computer')

# Exercise5
name = "Estelle"
age = 29
shoe_size = 40
info = f"Even if {name} has {age} yrs old only, she wears a shoe_size of {shoe_size}"
print(info)

# Exercise6
a = 60
b = 50
if a>b:
    print("Hello World")
else:
    print("not greater")

# Exercise7
# user_number = int(input("Please enter a number : "))
# if user_number % 2 == 0:
#     print("The number is even")
# else:
#     print("The number is odd")

# Exercise8
user_name= str(input("Please enter your name : "))
if user_name.lower() == "estelle":
    print("You are a lucky person")
else:
    print("You are not lucky")

# Exercise9
user_height= float(input("Please enter your height in centimeters : "))
if user_height >145:
    print("You are tall enough to ride")
else:
    print("You need to grow some more to ride")