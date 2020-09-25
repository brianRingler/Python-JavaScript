from datetime import datetime

class Car():
    def __init__(self, model, salePrice, color,yearBuilt):
        self.model = model
        self.salePrice = salePrice
        self.color = color
        self.yearBuilt = yearBuilt
    
    def getYears(self):
        today = datetime.now()
        year = today.year
        return  year - self.yearBuilt

carOne = Car('Charger',25000,'yellow',2010);
carTwo = Car('Rustang',22000,'blue',1998);

print(carOne.model)  # "Charger"
print(carTwo.model) # "Rustang"
print(carOne.color)  # "yellow"
print(carTwo.salePrice) # "22000"
print(carOne.getYears()) # 10
print(carTwo.getYears()) # 22
        
