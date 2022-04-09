#### CIPHER PKE ASYNC: 
How The Media Are Using Encryption Tools To Collect Anonymous Tips by Sam Sanders  February 27, 2017 
Hacker Lexicon: What Is the Signal Encryption Protocol? By Andy Greenberg NOV 29, 2020
https://signal.org/ 
Whistleblowers used to rely on the Postal Service, pay phone, or an underground parking garage to leak to the press. Now news organizations use multiple high-tech ways for the public to send them anonymous tips.  Encrypted messaging apps include Signal, PGP (or GPG) and SecureDrop. 
The Signal protocol uses a  "ratchet" system that changes the key after every message. It generates a collection of temporary key pairs for each user and permanent keys. When someone sends a message to a contact over an app using the Signal protocol, the app combines the temporary and permanent pairs of public and private keys for both users to create a shared secret key that's used to encrypt and decrypt that message. Since generating this secret key requires access to the users' private keys, it exists only on their two devices. Signal protocol's system of temporary keys constantly replenishes for each user and allows it to generate a new shared key after every message.
