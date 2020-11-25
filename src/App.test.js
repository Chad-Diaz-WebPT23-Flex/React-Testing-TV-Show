import React from 'react';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';
import {fetchShow as mockFetchShow } from './api/fetchShow'
import { res } from './data/res'



jest.mock('./api/fetchShow')
// console.log("cd: App.test.js: jest.mock api: ", fetchShow)

test("ensuring that app renders", () => {
    mockFetchShow.mockResolvedValueOnce(res);
    render(<App/>)
});

test('App fetched data and renders the showData', async () => {
    mockFetchShow.mockResolvedValueOnce(res);
    const { getByText, queryAllByText, getAllByTestId } = render(<App />);
    
    expect(getByText(/Fetching data.../i)).toBeInTheDocument();

    await waitFor(() => {
        expect(getByText(/select a season/i)).toBeInTheDocument();
    })

    const selection = getByText(/select a season/i)
    userEvent.click(selection);
    const season1 = getByText(/season 1/i)
    userEvent.click(season1)

    expect(getAllByTestId(/episodes/i)).toHaveLength(8)

    userEvent.click(queryAllByText(/season 1/i)[0])
    const season4 = getByText(/season 4/i)
    userEvent.click(season4)
    expect(getAllByTestId(/episodes/i)).toHaveLength(3)
} )