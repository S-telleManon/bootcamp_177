# Exercise1
print(("Hello world\n"*4) + ("I love python\n"*4))


# Exercise2
user_input= int(input("Please choose a number from 1 to 12: "))
if 3 <= user_input <= 5:
    print("Spring ")
elif 6 <= user_input <= 8:
    print("Summer")
elif 9 <= user_input <= 11:
    print("Autumn ")
elif 1 <= user_input <= 2:
    print("Winter ")
elif user_input == 12:
    print("Winter ")
else:
    print("Your selection is incorrect")