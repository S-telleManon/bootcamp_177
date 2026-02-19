# student_1_name ="Abraham"
# student_2_name ="Estelle"
# student_1_address ="Floreal"
# student_2_address ="Terre rouge"


student_1 = { # sets cannot have duplicates
    "name":"Abraham", 
    "age": 25, 
    "address": "Floreal", 
    "weight" : 70,
    "car" : {
        "make" : "nissan",
        "model" : "march",
        "year" : 2020,
        "supplier" : {
            "name" : "Leal",
            "address" : "Port Louis"
        }
    }
}
student_1["name"]
print(f"the age of {student_1['name']} is {student_1['age']}")
print(f"{student_1['name']} has a {student_1['car']['make']} {student_1['car']['model']} of year {student_1['car']['year']} and supplier is in {student_1['car']['supplier']['address']}")