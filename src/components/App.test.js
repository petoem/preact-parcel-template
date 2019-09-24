import { render } from 'enzyme';
import App from './App';

test('renders app correctly', () => {
  const wrapper = render(<App />);
  expect(wrapper.text()).toEqual('Hello, Preact!');
});
