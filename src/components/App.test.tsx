import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import { Iusers } from './users/'
import { configure, shallow, mount } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('<App /> shallow rendering', () => {
  it('Div Container Contains right header text', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('header').text()).toBe('Get User Info')
  })

  it('Users component is defined', () => {
    const usersComp = shallow(<Iusers />)
    expect(usersComp).toBeDefined();
  })
})