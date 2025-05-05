# -------------------------------Numero Perfeito----------------------------------------
# num = int(input("Digite o número: "))
# soma = 0

# for i in range (1,num):
#     if num % i == 0:
#          soma = soma + i
#  if soma == num:
#      print("Numero perfeito.")
#  else:
#      print("Numero não perfeito.")
# ---------------------------------------------------------------------------------

#  n = int(input("Digite número inteiro: "))

#  if n < 10:
#      print("Um digito.")
#  elif n >= 10 and n < 100:
#      print("Dois digitos.")
#-------------------------------------------------------------------------------
# cont = 0

# while cont < 10:
#     for i in range(1,100):
#          if i % 3 == 0:
#              print(i)
#              cont = cont + 1
#          if cont >= 10:
#              break
#--------------------------------------------------------------------------------------
#  n = int(input("Digite um número: "))
#  for i in range(1,n+15):
#      if n % i == 0:
#          print(i)
#------------------------------------------------------------------------------------
#  print("Informe quatro números:")
#  a = int(input(""))
#  b = int(input(""))
#  c = int(input(""))
#  d = int(input(""))

#  if b - a == d - c:
#      print("O número é um P.A. Sua razão é ", d - c)
#  else:
#      print("Não é P.A")
#------------------------------------------------------------------------------------
n = 10
for i in range(1,100):
    n = n * 10
    print(n)
for i in range(1,100):
    n = n / 10
    print(n)