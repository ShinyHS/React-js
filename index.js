import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';

class Apps extends React.Component{
  render(){
      return <h1>hello world!</h1>
  }
}
function My(){
  
    return <h1>that is functionn</h1>;
  
}
const App=(<div>
  <table className='tab'>
                
                <tr>
                <td>name</td>
                <td>email</td>
                <td>salary</td></tr>
                
                <tr>
                    <td>venkatesh</td>
                    <td>venkatesh@gamil.com</td>
                    <td>10,00,100</td>    
                </tr>
                <tr>
                    <td>shiny</td>
                    <td>shiny12@gamil.com</td>
                    <td>2,00,100</td> 
                 </tr>
                 <tr>
                    <td>shiva</td>
                    <td>shiva117@gamil.com</td>
                    <td>100,00,100</td> 
                 </tr>
            </table>
</div>)
class Myreact extends React.Component{
    render()
    {
      return <h1>welcome to class</h1>
    }
}
const root=createRoot(document.getElementById('root'));
console.log(document.getElementById('root'));
console.log(root);
root.render(<React.StrictMode>
  {App} {/*using variable*/}
   <Myreact/> {/*using class*/}
    <My/> {/*using fumction*/}
    <h1>using tag</h1>
    <Apps/>
</React.StrictMode>);
