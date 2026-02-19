import random
def throw_dice():
    return random.randint(1, 6)


def throw_until_doubles():
    count = 0

    while True:
        dice1 = throw_dice()
        dice2 = throw_dice()
        count += 1
        
        if dice1 == dice2:  # Stop when doubles are reached
            break
            
    return count

def main():
    results = [] 

    for _ in range(100):
        throws_needed = throw_until_doubles()
        results.append(throws_needed)

    total_throws = sum(results)
    average_throws = total_throws / len(results)

    print(f"Total throws: {total_throws}")
    print(f"Average throws to reach doubles: {average_throws:.2f}")

main()