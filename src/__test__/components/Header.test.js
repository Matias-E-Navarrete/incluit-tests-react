import React from 'react'
import {render, screen} from '@testing-library/react'
import ProviderMock from '../../__mocks__/Provider/ProviderMock'
import Header from '../../components/Header'

describe('<Header/>', function () {
    // Arrange.
    render(
        <ProviderMock>
            <Header />
        </ProviderMock>
    )

    test('Should be render Header in the document', () => {
        // Act.
        const header = screen.getByTestId('header-component')

        // Assert.
        expect(header).toBeInTheDocument()
    })

    test('Should be render header title', ()=>{
        // Act.
        const headerTitle = screen.getByTitle('header-title')

        // Assert.
        expect(headerTitle).toBeInTheDocument(headerTitle)
    })

    test('Should be render "Incluit Course"', ()=>{
        // Arrange.
        const text = "Incluit Course"

        // Act.
        const headerTitle = screen.getByTitle('header-title')

        // Assert.
        expect(headerTitle).toHaveTextContent(text)
    })
});
