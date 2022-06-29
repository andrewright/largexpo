import React from 'react';
import {render} from '@testing-library/react';
import App from './App';

test('renders Billboard', () => {
	const {getByText} = render(<App/>);
	const linkElement = getByText(/Billboard/i);
	expect(linkElement).toBeInTheDocument();
});
