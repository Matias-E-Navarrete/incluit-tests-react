import React from 'react'
import ProviderMock from "../../__mocks__/Provider/ProviderMock";
import Product from "../../components/Product";
import {render, screen, fireEvent} from "@testing-library/react";
import ProductMock from "../../__mocks__/ProductMock";

describe('<Product />', function () {
    test('Should be render', () => {
        // Arrange.
        const handleAddToCart = jest.fn()
        render(
            <ProviderMock>
                <Product
                    product={ProductMock}
                    handleAddToCart={handleAddToCart}
                />
            </ProviderMock>
        )

        // Act.
        const product = screen.getByTestId('product-item')

        // Assert.
        expect(product).toBeInTheDocument()
    })

    test('The buy button should be work', () => {
        // Arrange.
        const handleClick = jest.fn()

        render(
            <ProviderMock>
                <Product
                    product={ProductMock}
                    handleAddToCart={handleClick}
                />
            </ProviderMock>
        )

        // Act.
        const buyButton = screen.getByTestId('buy-button')
        fireEvent.click(buyButton)

        // Assert.
        expect(handleClick).toHaveBeenCalledTimes(1)
    })
});