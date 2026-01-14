
# Exercise 1: Converting Lists into Dictionaries
my_dict = {
    'Ten': 10,
    'Twenty': 20,
    'Thirty': 30,
}
print(my_dict)

# Exercise 2: Cinemax #2
total_cost = 0

family = {
    "rick": 43, 
    'beth': 13,
    'morty': 5,
    'summer': 8
}

for name, age in family.items():
    if age < 3:
        cost = 0
    elif 3 <= age <= 12:
        cost = 10
    else:
        cost = 15
        
    total_cost += cost
    print(f"{name} is {age} years old and cost is ${cost}")

print(f"\nTotal family cost: ${total_cost}")


#    Exercise 3: Zara

brand = {
    'name': 'Zara',
    'creation_date': 1975,
    'creator_name': 'Amancio Ortega Gaona',
    'type_of_clothes': ['men', 'women', 'children', 'home'],
    'international_competitors': ['Gap', 'H&M', 'Benetton'],
    'number_stores': 7000,
    'major_color': {
        "France": "blue", 
        "Spain": "red", 
        "US": ['pink', 'green']
    }
}
# Change the value of number_stores to 2.
brand['number_stores'] = 2
print(brand)
# Print a sentence describing Zara’s clients using the type_of_clothes key.
clients = ', '.join(brand['type_of_clothes'])
print(f"Zara offers clothing and home items for {clients}.")
# Add a new key country_creation with the value Spain.
brand['country_creation'] = 'Spain'
print(brand)
# Check if international_competitors exists and, if so, add “Desigual” to the list.
if 'international_competitors' in brand:
    brand['international_competitors'].append('Desigual')

print(brand['international_competitors'])

# Delete the creation_date key.
if 'creation_date' in brand:
    del brand['creation_date']

print(brand)
# Print the last item in international_competitors.
print(brand['international_competitors'][-1])
# Print the major colors in the US.
print("US major colors:", brand['major_color']['US'])
# Print the number of keys in the dictionary.
print("Number of keys in the dictionary:", len(brand))
# Print all keys of the dictionary.
print("All keys in the dictionary:", list(brand.keys()))

#            Exercise 4: Disney Characters
users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]
user_dict = {user: index for index, user in enumerate(users)}

print(user_dict)

index_to_user = {index: user for index, user in enumerate(users)}

print(index_to_user)

sorted_users = sorted(users)  # Alphabetical sort
sorted_dict = {user: index for index, user in enumerate(sorted_users)}

print(sorted_dict)