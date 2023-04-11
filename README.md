# Beyond Beauty Keypad

This project is made for code testing purpose.

In order to setup the project you need to use the correct Node version which is
documentate in .nvmrc file in the project directory. Recommended command is `nvm use`
executed by the node version manager in order to switch this version.

To start the project you will have to install the node_modules. I used the packet manager pnpm 
therefore I used the command `pnpm i`.

To run the project locally use the `dev` script defined in the `package.json` by running the command
`pnpm run dev`.

Features of the keypad:

- Mobile friendly
- Access to secondary labels if clicked multiple times fast (same as old phones - timeout is 1 second)
- History which label (character) was chosen with timestamp and coordinatess preserved in local storage
- Reset history button

![](https://github.com/ljubomirsinadinovski/beyond-beauty-keypad/blob/main/example2.png)