# Web Browser Based File Encryption / Decryption

The html document for this project is hosted at  
https://www.meixler-tech.com/web-browser-based-file-encryption-decryption.html

Encrypt a file using a password, then use the same password later to decrypt the file.

IMPORTANT: The same password that was used to encrypt the file must be used to decrypt the file later. If you loose or forget the password, it cannot be recovered! 

This web page uses javascript running within your web browser to encrypt and decrypt files. Your files and passphrase do not leave your web browser during the process. This can be independently verified by reviewing the source code for this page, or by monitoring your web browser's networking activity during operation of this page. This page can also be downloaded and run locally on your system offline. The encryption used by this page is compatible with openssl.

Cryptography
------------
All cryptography operations are implemented using using the Web Crypto API. Files are encrypted using AES-CBC 256-bit symmetric encryption. The encryption key is derived from the passphrase and a random salt using PBKDF2 derivation with 10000 iterations of SHA256 hashing.

openssl compatibility
---------------------
Files encrypted using this page can be decrypted using openssl using the following command:  
openssl aes-256-cbc -d -salt -pbkdf2 -iter 10000 -in encryptedfilename -out plaintextfilename

Files encrypted using the following openssl command can be decrypted using this page:  
openssl aes-256-cbc -e -salt -pbkdf2 -iter 10000 -in plaintextfilename -out encryptedfilename

Running this page offline
-------------------------
This web page is self-contained. The page does not require any supporting files; all javascript and css for this page is contained in the source code of this page. To run this page locally on your system offline, simply save this page to your system as a .html file, then open the file from your system in your web browser (optionally with networking disabled). 
