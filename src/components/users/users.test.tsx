import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Iusers } from './';

import { render, fireEvent, screen, getByTestId, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';


test('Users component to be defined', async () => {
    const wrapper = render(<Iusers />)
    expect(wrapper).toBeDefined();
});

test('get Users button to be defined', async () => {
    const wrapper = render(<Iusers />)

    const getUsersbtn = wrapper.queryByRole('button');
    expect(getUsersbtn).toBeDefined();
});


test('get Users button click functionality', async () => {
    const mockCallback = jest.fn()
    const wrapper = render(<Iusers />)
    const getUsersbtn = wrapper.queryByRole('button');
    getUsersbtn.onclick = mockCallback;
    //TBD
    //fireEvent.click(getUsersbtn);
    //expect(mockCallback).toHaveBeenCalled();
});