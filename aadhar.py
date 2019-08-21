import csv
from collections import defaultdict
from datetime import date

def calculateAge(birthDate): 
	today = date.today()
	age = today.year - birthDate.year - ((today.month, today.day) < (birthDate.month, birthDate.day))
	return age 

f=open('Aadhar_data .csv',)
reader=csv.reader(f)
reader = csv.DictReader(f)
print("please enter the Aadhar_number")
Aadhar_nm = input() 
for row in reader:
	if(str(Aadhar_nm) == str(row['Aadhar number'])):
		Age = calculateAge(date(1998, 3, 2))
		print(Age)
		if Age >= 18:
			print("Adult")
			print('be73cda7ee8c19c75e60974ec186dd6973067d184afb3bc03d7530ea935e4a3f')
