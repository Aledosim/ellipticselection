import React from 'react';
import { render, screen } from '@testing-library/react';

import TopBar from './TopBar';

it('renders without crashing', () => {
    render(<TopBar />)
});
