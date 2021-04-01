import React from 'react';
import { render, screen } from '@testing-library/react';

import CurrencyProvider from '../contexts/CurrencyContext'

import InfoCard from './InfoCard';

describe('<InfoCard /> tests', () => {
    it('renders without crashing', () => {
        render(
            <CurrencyProvider>
                <InfoCard />
            </CurrencyProvider>
        )
    })
})

