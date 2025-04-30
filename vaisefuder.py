# for i in range(0,       5):
#    x = int(input("Digite um número."))
#    print("O resultado é: ", x*3)


# palavra = input("")
# numero = int(input(""))
# print(palavra*numero)

#x = 0
#while x < 2001:
#    if x % 2 == 0:
#        print(x)
#    x = x + 1


Y = 0
for i in range(0,10):
     X = float(input("Digite um número: "))
     Y = Y + X
     if X < 0:
          print("Erro! Número negativo.")
          break
     
print("Total é ", Y, ", a média é", Y/10)



