import React from "react";
import { createRoot } from 'react-dom/client';
import App from './App'
import './index.css' 


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App/>);







/*ReactDOM.render(
<Router>
<App/>
</Router>,
 document.querySelector("#root"))*/