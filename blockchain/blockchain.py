# Blockchain-Async project
# Michele P, Mamudu, Leite
# we start by looking at the code that was provided by Iulian and Eric
# We did research online and also looked at other repos
# We finally arrived at our own version of the code as a compilation of all the sources

# this package is for encryption
import hashlib

# this one is for formatting our blocks
import json

#this is needed for each block's timestamp
from time import time

# simulate a unique number for the proof of work
import random


class Blockchain(object):
    def __init__(self):
        self.chain = []
        self.pending_transactions = []
        self.new_block(100)

# Create a new block listing key/value pairs of block
#information in a JSON object. Reset the list of pending transactions &
#append the newest block to the chain.
    def new_block(self, proof, previous_hash=None):
        block = {
            'index': len(self.chain) + 1,
            'timestamp': time(),
            'transactions': self.pending_transactions,
            'proof': proof,
            'previous_hash': previous_hash or self.hash(self.chain[-1]) if self.chain else None,
                }
        self.pending_transactions = []
        self.chain.append(block)
        return block

#Search the blockchain for the most recent block.
    @property
    def last_block(self):
        return self.chain[-1]

# Add a transaction with relevant info to the 'blockpool'
    def new_transaction(self, sender, recipient, amount):
        transaction = {
            'sender': sender,
            'recipient': recipient,
            'amount': amount
        }
        self.pending_transactions.append(transaction)
        return self.last_block['index'] + 1

# receive one block. Turn it into a string, turn that into Unicode (for hashing).
#Hash with SHA256 encryption, then translate the Unicode into a hexidecimal string.

    def hash(self, block):
        string_object = json.dumps(block, sort_keys=True)
        block_string = string_object.encode()
        raw_hash = hashlib.sha256(block_string)
        hex_hash = raw_hash.hexdigest()
        return hex_hash

# - the random numbers simulate proofs for the 21 million maximum amount of bitcoins
proof1 = '0000' + str(random.randint(1,21000000))
proof2 = '0000' + str(random.randint(1,21000000))
proof3 = '0000' + str(random.randint(1,21000000))

# Async Task: Initialize an empty chain and create three blocks that record three transactions. Display the blockchain for each transaction.

#Add your code below this line
####################################################
# STEP 1 instantiate the blockchain object
bc_mem = Blockchain()

# STEP 2 print the empty chain that has the genesis block with proof =100
print(bc_mem.chain)


# STEP 3 initiate the first transation of 1BTC from ___ to ___ by calling the new_transaction() on the object
transaction1  = bc_mem.new_transaction("MP","Mamudu","10000")

# STEP 4 add the new block to the chain using the new_block() by passing a proof argument for each
bc_mem.new_block(proof1)

# STEP 5 Print the chain with the new changes
print(bc_mem.chain)

# STEP 6 Repeat steps 3-5 to record two more transactions
transaction2  = bc_mem.new_transaction("Mamudu","EL","20000")
bc_mem.new_block(proof2)
print(bc_mem.chain)

transaction3  = bc_mem.new_transaction("EL","MP","30000")
bc_mem.new_block(proof3)
print(bc_mem.chain)
