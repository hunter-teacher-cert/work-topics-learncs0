import math

message = input("Enter the letter to be encrypted: ")
ascii_code = ord(message)
 
p = 11 #private key
q = 17 #private key
e = 3  #public key
 
n = p*q #public key

#Encryption, c = m^e mod n
def encrypt(msg):
    m_power_e = math.pow(msg,e) #calculates m to the power of e
    c = m_power_e % n #find modulo to get the ciphered text
    print("Encrypted Message is: ", c)
    return c
 
print("ASCII Code is: ", ascii_code)
c = encrypt(ascii_code)
