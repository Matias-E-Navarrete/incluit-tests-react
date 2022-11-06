import React from 'react'
import {render, screen} from '@testing-library/react'
import ProviderMock from '../../__mocks__/Provider/ProviderMock'
import Header from '../../components/Header'
import {initialStateWithCart} from "../../__mocks__/Provider/states";

describe('<Header/>', function () {
    test('Should be render Header in the document', () => {
        // Arrange.
        render(
            <ProviderMock>
                <Header/>
            </ProviderMock>
        )

        // Act.
        const header = screen.getByTestId('header-component')

        // Assert.
        expect(header).toBeInTheDocument()
    })

    test('Should be render Header alert with cart', () => {
        // Arrange.
        render(
            <ProviderMock state={initialStateWithCart}>
                <Header />
            </ProviderMock>
        )

        // Act.
        const alert = screen.getByTestId('alert-with-cart')

        // Assert.
        expect(alert).toBeInTheDocument()
    })

    test('Should be render header title', () => {
        // Arrange.
        render(
            <ProviderMock>
                <Header/>
            </ProviderMock>
        )

        // Act.
        const headerTitle = screen.getByTitle('header-title')

        // Assert.
        expect(headerTitle).toBeInTheDocument(headerTitle)
    })

    test('Should be render "Incluit Course"', () => {
        // Arrange.
        render(
            <ProviderMock>
                <Header/>
            </ProviderMock>
        )
        const text = "Incluit Course"

        // Act.
        const headerTitle = screen.getByTitle('header-title')

        // Assert.
        expect(headerTitle).toHaveTextContent(text)
    })
});
