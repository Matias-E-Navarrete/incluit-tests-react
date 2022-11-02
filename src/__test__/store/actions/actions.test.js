import actions from '../../../store/actions'
import ProductMock from "../../../__mocks__/ProductMock";

describe('Actions', function () {
    test('Add to cart action', () => {
        const payload = ProductMock

        const expected = {
            type: 'ADD_TO_CART',
            payload
        }

        expect(actions.addToCart(payload)).toEqual(expected)
    })
})
;