import React from 'react';
import withSearch from './withSearch';
import Books from './Books';
import Enzyme, { shallow }from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('should render the component when the component is passed'
    , () => {
    const WithComponent = withSearch(Books);
    const wrapper = shallow(
      <WithComponent/>
    );
    expect(wrapper.html()).not.toBe(null);
});
