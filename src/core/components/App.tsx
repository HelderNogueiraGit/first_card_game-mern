import React from 'react';
import './App.css';

import { Flex, Text, Button, Theme } from "@radix-ui/themes";
import { MainPage } from '../../game/components/MainPage';
import { Page } from './Page';

export function App() {
	return (
    <div className='app'><Theme>
      <MainPage/>
    </Theme></div>
	);
}
export default App;
