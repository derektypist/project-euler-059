# Project Euler 059 - XOR Decryption

Each character on a computer is assigned a unique code and the preferred standard is ASCII (American Standard Code for Information Interchange).  For example, uppercase A = 65, asterisk (*) = 42, and lowercase k = 107.

A modern encryption method is to take a text file, convert the bytes to ASCII, then XOR each byte with a given value, taken from a secret key.  The advantage with the XOR function is that using the same encryption key on the cipher text, restores the plain text; for example 65 XOR 42 = 107, then 107 XOR 42 = 65.

For unbreakable encryption, the key is the same length as the plain text message, and the key is made up of random bytes.  The user would keep the encrypted message and the encryption key in different locations, and without both "halves", it is impossible to decrypt the message.

Unfortunately, this method is impractical for most users, so the modified method is to use the password as a key.  If the password is shorter than the message, which is likely, the key is repeated cyclically throughout the message.  The balance for this method is using a sufficiently long password key for security, but short enough to be memorable.

Your task has been made easy, as the encryption key consists of three lower case characters.  Using `cipher`, an array containing the encrypted ASCII codes, and the knowledge that the plain text must contain common English words, decrpyt the message and find the sum of the ASCII values in the original text.

Information at [Project Euler 059](https://projecteuler.net/problem=59)

## UX

**Getting Started**

Select the Show Solution button to show the solution.  Select the Hide Solution button to hide (clear) the solution.  You can also view the cipher, a PDF file containing the encrypted ASCII codes.

- [Cipher](pdf/cipher.pdf)

**User Stories**

As a user, I can show or hide the solution by selecting the appropriate button.

As a user, I can view the cipher, a PDF file containing the encrypted ASCII codes.

As a user, I expect the function `XORDecryption(cipher)` to return a number.

As a user, I expect the function `XORDecryption(cipher)` to return 129448.

User Stories on function `XORDecryption(arr)` taken from [FreeCodeCamp - Coding Interview Prep - Project Euler 059](https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-59-xor-decryption)

**Information Architecture**

The function `XORDecryption(arr)` returns a number, where `arr` is an array of integers.

## Features

Allows the user to show or hide the solution to the problem as described in [Project Euler 059](https://projecteuler.net/problem=59).  Also allows the user to view the [Cipher](pdf/cipher.pdf), a PDF file containing the encrypted ASCII codes.  If time permitted, would like to give the user an option to show the message as well as the sum of the ASCII values in the original text.

