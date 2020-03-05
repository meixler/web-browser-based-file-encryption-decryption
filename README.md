# Web Browser Based File Encryption / Decryption

Use your web browser to encrypt and decrypt files.

## Usage

Download [web-browser-based-file-encryption-decryption.html](https://github.com/meixler/web-browser-based-file-encryption-decryption/blob/master/web-browser-based-file-encryption-decryption.html), then open the html document in your web browser.  Or, simply point your web browser to the html document hosted [here](https://www.meixler-tech.com/web-browser-based-file-encryption-decryption.html).

Then, use the web page rendered in your browser to encrypt a file using a password.  Use the same password later to decrypt the file.  IMPORTANT: The same password that was used to encrypt the file must be used to decrypt the file later. If you loose or forget the password, it cannot be recovered!

## Operation and privacy

The page uses javascript running within your web browser to encrypt and decrypt files. Your files and password do not leave your web browser during the process. This can be independently verified by reviewing the source code for the page, or by monitoring your web browser's [networking activity](https://developer.mozilla.org/en-US/docs/Tools/Network_Monitor) during operation of the page. The page can also be downloaded and run locally on your system offline. 

## Cryptography

All cryptography operations are implemented using using the [Web Crypto API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API). Files are encrypted using AES-CBC 256-bit symmetric encryption. The encryption key is derived from the password and a random salt using PBKDF2 derivation with 10000 iterations of SHA256 hashing.


## Compatibility with openssl
The encryption used by the page is compatible with [openssl](https://www.openssl.org/docs/man1.1.1/man1/openssl-enc.html).

Files encrypted using the page can be decrypted using openssl using the following command:
    
    openssl aes-256-cbc -d -salt -pbkdf2 -iter 10000 -in encryptedfilename -out plaintextfilename

Files encrypted using the following openssl command can be decrypted using the page:  

    openssl aes-256-cbc -e -salt -pbkdf2 -iter 10000 -in plaintextfilename -out encryptedfilename

## Running the page offline

The web page is self-contained. The page does not require any supporting files; all javascript and css for the page is contained in the source code of the page. To run this page locally on your system offline, simply save the page to your system as a .html file, then open the file from your system in your web browser (optionally with networking disabled).

## Contributing

Pull requests are welcome.

## License

This project is licensed under the [GPL-3.0](https://www.gnu.org/licenses/gpl-3.0.en.html) open source license.

## Contact

Please [contact MTI](https://www.meixler-tech.com/contact.php) for any questions or comments concerning this project.
