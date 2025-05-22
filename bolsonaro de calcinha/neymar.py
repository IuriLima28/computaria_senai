x = int(input("Digite um numero: "))
import time
y=x
for i in range(1,10):
    time.sleep(3)
    y = y+x
    print(y)