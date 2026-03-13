import box from './app.js'

var h1 = React.createElement('h1',{id:'wedding'},"hey Iam Shreyash, future husband of sonal") //Creates a React element (virtual DOM object).
var h2 = React.createElement('h2',{id:'weds'},"Sonal Loves Shreyash")
var div = React.createElement('div',{id:'couple'},[h1,box(),h2])
// | Part     | Meaning                                   |
// | -------- | ----------------------------------------- |
// | `'h1'`   | HTML tag you want to create               |
// | `null`   | Props (attributes like className, id etc) |
// | `"text"` | Content inside the element                |

var container = document.querySelector('#container')//This selects the HTML element where React will render the UI.
var root = ReactDOM.createRoot(container) //“This container will be controlled by React.”
root.render(div)
// React.createElement()
//         ↓
// Creates Virtual DOM object
//         ↓
// root.render()
//         ↓
// React converts it to Real DOM
//         ↓
// Displayed in browser 