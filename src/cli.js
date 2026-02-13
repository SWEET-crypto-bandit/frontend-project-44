import _ from 'readline-sync'
export const chat = () => {
console.log('Welcome to the Brain Games!')
const name = _.question('May I have your name?')
console.log(`Hello, ${name}!`)
}
