export default function hello() {
    return `Hello World`;
}

let sayHi = (name="utku") => `hello ${name}`;
let API_URL="url"


export {
    sayHi,
    API_URL as API
}