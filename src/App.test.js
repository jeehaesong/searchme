import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme, { shallow, mount, render }from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Books from './Books';
import Cities from './Cities';

Enzyme.configure({ adapter: new Adapter() });
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('renders 1 <App /> component', ()=> {
    const component = shallow(<App />);
    expect(component).toHaveLength(1);
})

it('renders 1 <Books /> components', ()=> {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Books)).toHaveLength(1);
})
it('renders 1 <Cities /> tags', ()=> {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Cities)).toHaveLength(1);
})

