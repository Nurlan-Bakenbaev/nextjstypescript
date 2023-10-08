type Blogpost = {
    id:string,
    title;import React from 'react'
    import renderer from 'react-test-renderer'
    import { Provider } from 'react-redux'
    
    import store from '~/store'
    import { types.d } from '../types.d'
    
    describe('<types.d />', () => {
      const defaultProps = {}
      const wrapper = renderer.create(
        <Provider store={store}>
         <types.d {...defaultProps} />
        </Provider>,
      )
    
      test('render', () => {
        expect(wrapper).toMatchSnapshot()
      })
    })
}