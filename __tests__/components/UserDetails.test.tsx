import * as React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import UserDetails from '../../src/components/UserDetails';
import { IUser } from '../../src/components/UserPage';

const testUser: IUser = {
    avatar_url: 'https://avatars0.githubusercontent.com/u/6805019?v=4',
    html_url: 'https://github.com/danwebnl',
    type: 'User',
    score: '1111',
    login: 'danwebnl'
};

describe('<UserDetails />', () => {

    it('renders and matches the snapshot', () => {
        const wrapper = shallow(<UserDetails user={testUser} />);
        expect(toJSON(wrapper)).toMatchSnapshot();
    });

    it('renders the image properly', () => {
        const wrapper = shallow(<UserDetails user={testUser} />);
        const img = wrapper.find('img');
        expect(img.props().src).toBe(testUser.avatar_url);
        expect(img.props().title).toBe(testUser.login);
    });

    it('renders the GitHub page URL', () => {
        const wrapper = shallow(<UserDetails user={testUser} />);
        const ATag = wrapper.find('a');
        expect(ATag.children().text()).toBe('GitHub Page');
        expect(ATag.props().href).toBe(testUser.html_url);
    });
});
