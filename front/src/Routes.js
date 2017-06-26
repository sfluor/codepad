import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from './home.page';
import CodePage from './code.page';
import TopBar from './components/topbar.component';
import Footer from './components/footer.component';
import { Root } from './styles/container.style';

export default () => (
	<Router>
		<Root>
			<TopBar />
			<Route exact path ='/' component={HomePage} />
			<Route exact path='/:id' component={CodePage} />
			<Footer />
		</Root>
	</Router>
);