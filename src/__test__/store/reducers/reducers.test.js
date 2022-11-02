import reducer from '../../../store/reducers'
import ProductMock from "../../../__mocks__/ProductMock";

describe('Reducers', function () {
    test('initialStateEmpty', () => {
        const initialState = {
            cart: []
        }
        const action = {
            type: 'DEFAULT',
            payload: ''
        }

        const result = reducer(initialState, action)

        expect(initialState).toEqual(result)
    })

    test('Should return product added to cart in the store', () => {
        // Arrange.
        const initialState = {
            cart: []
        }

        const payload = ProductMock
        const action = {
            type: 'ADD_TO_CART',
            payload
        }
        const expected = {
            cart: [ProductMock]
        }

        // Act.
        const result = reducer(initialState, action)

        // Assert.
        expect(result).toEqual(expected)
    })
});