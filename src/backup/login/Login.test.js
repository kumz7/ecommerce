import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import Login from './login';
import userEvent from '@testing-library/user-event';
import {BrowserRouter as Router} from 'react-router-dom';

test('login user name', async() => {
  const {container} = render(<Router><Login /></Router>);
  const linkElement = await container.querySelector("#un");
  expect(linkElement).toHaveValue("tester")
});

test('login password', async() => {
  const {container} = render(<Router><Login /></Router>);
  const linkElement = await container.querySelector("#pwd");
  expect(linkElement).toHaveValue("test")
});

test('login error', async() => {
  const doLogin = jest.fn()
  const {container} = render(<Router><Login /></Router>);
  const un = await container.querySelector("#un");
  const pwd = await container.querySelector("#pwd");
  const log = await container.querySelector("#login");

  fireEvent.change(un, {target : {value:"hello"}})
  fireEvent.change(pwd, {target : {value:"hello"}})
  jest.spyOn(instance, 'doLogin()');
  fireEvent.click(log);
  await (waitFor(() => expect(screen.getByTestId("error")).toHaveTextContent("true")))
  
});
