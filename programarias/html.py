numeros = [1,2,3,4]
print(numeros)
numeros.append(6)
print(numeros)
numeros.remove(2)
print(numeros)
posicao = numeros.index(4)
numeros.insert(posicao,40)
numeros.remove(4)
numeros.sort(reverse=True)
print(numeros)
