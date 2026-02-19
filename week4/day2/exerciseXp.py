# Exercise 1 : What are you learning ?

def display_message():
    print("I am learning Python in my Full Stack Course")

display_message()

# Exercise 2: What’s your favorite book ?

def favorite_book(title):
    print(f'One of my favorite book is {title} ')

favorite_book("Harry Potter")

# Exercise 3 : Some Geography

def describe_city(city,country ='India'):
    print(f'{city} is in {country}')

describe_city("Milan","Italy")

# Exercise 4 : Random
import random

def random_number(user_number):
    if not 1 <= user_number <= 100:
        return "Please enter a number between 1 and 100."
    random_number = random.randint(1, 100)
    if user_number == random_number:
        return f"Success! Both numbers are {user_number}."
    else:
        return f"Fail! Your number: {user_number}, Random number: {random_number}."
print(random_number(25))

# Exercise 5 : Let’s create some personalized shirts !
def make_shirt(size ='L',text='I love Python'):
    print(f'The size of the shirt is {size} and the text is {text}')
make_shirt()
make_shirt("M",)
make_shirt("S","Hello Sunshine")

# Exercise 6 : Magicians …

magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

def show_magicians(magicians):
    for magician in magicians:
        print(magician)

def make_great(magicians):
    for i in range(len(magicians)):
        magicians[i] = magicians[i] + " the Great"

make_great(magician_names)
show_magicians(magician_names)