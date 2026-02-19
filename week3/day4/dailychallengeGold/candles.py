from datetime import datetime

birth_input= input("Please enter your bithdate (DD/MM/YYYY)").strip()
birth_date = datetime.strptime(birth_input, "%d/%m/%Y")
if birth_date =="":
    print("Please enter again")
    

today = datetime.today()
age  = today.year - birth_date.year -((today.month,today.day)<(birth_date.month,birth_date.day))
candles  = age % 10
candles_shown = "i"*candles

print("    ___" + candles_shown + "___")
print("     |:H:a:p:p:y:|")
print("   __|___________|__")
print("  |^^^^^^^^^^^^^^^^^|")
print("  |:B:i:r:t:h:d:a:y:|")
print("  |                 |")
print("  ~~~~~~~~~~~~~~~~~~~")