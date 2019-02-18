import * as React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import UsersList from '../../src/components/UsersList';

const testUsers: any = [{ login: 'acount-a' }, { login: 'acount-b' }];
const testUsersUpdate: any = [{ login: 'acount-a' }, { login: 'acount-c' }];

describe('<UsersList /> ', () => {

    it('renders', () => {
        shallow(<UsersList users={testUsers} />);
    });

    it('matches the snapshot', () => {
        const wrapper = shallow(<UsersList users={testUsers} />);
        expect(toJSON(wrapper)).toMatchSnapshot();
    });

    it('updates via props', () => {
        const wrapper = shallow(<UsersList users={testUsersUpdate} />);
        expect(toJSON(wrapper)).toMatchSnapshot();

        wrapper.setProps(testUsers);
        expect(toJSON(wrapper)).toMatchSnapshot();
    });

});
