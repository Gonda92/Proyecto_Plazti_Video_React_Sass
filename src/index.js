import React from 'react';
import ReactDom from 'react-dom';
import HelloWorld from './components/HelloWorld.jsx';

//render recibe 2 parametros principalmente, 1 es el componente y el 2do a donde vamos a empujar dicho componente (en este caso sera en un elemento del html)
ReactDom.render(<HelloWorld />, document.getElementById('app'));
