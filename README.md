This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

---------------------------------------------------

Длина вводимого в \<input\> текста записывается в state
затем передаётся в ValidationComponent в пропс

если длина > 5 то должен рендериться один \<p\>, если меньше, то другой

Собщение о длине вводимого текста должно появляться только если User начал вводить текст
для этого в InputBlock.js создано условие.

ПРОБЛЕМА: Parsing error при попытке вызвать второй компонент (InputLength_message)
ВОПРОС: На что он ругается? 
