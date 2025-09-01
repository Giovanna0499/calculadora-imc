peso = float(input("Digite seu peso (em kg): "))
altura = float(input("Digite sua altura (em metros): "))

imc = peso / (altura ** 2)

print("Seu IMC é: {:.2f}".format(imc))

if imc < 18.5:
    print("Abaixo do peso")
elif 18.5 <= imc < 24.9:
    print("Peso normal")
elif 25 <= imc < 29.9:
    print("Sobrepeso")
elif 30 <= imc < 34.9:
    print("Obesidade grau I")
elif 35 <= imc < 39.9:
    print("Obesidade grau II (severa)")
else:
    print("Obesidade grau III (mórbida)")