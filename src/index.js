import React from 'react';
import { Route, Switch } from 'react-router'
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './components/App';
import Register from './components/user/Register';
import BlockWriter from "./components/block/BlockWriter";
import LoveCard from './components/block/LoveCard';
import registerServiceWorker from './registerServiceWorker';
import 'typeface-roboto';

ReactDOM.render(
	(
	<HashRouter>
		<div>
	    	<Route exact path='/' component={App} />
	    	<Route path='/login' component={Register} />
	    	<Route path='/blockwriter' component={BlockWriter} />
	    	<Route path='/block/lovecard' component={LoveCard} />
	    </div>
	</HashRouter>), document.getElementById('root'));
registerServiceWorker();
