import React from 'react';
import Footer from '../../components/Footer';
import { render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';

describe('<Footer />', () => {
  test('Should be Footer in the document', ()=>{
    // Arrange.
    render(<Footer />)
    // Act.
    const footer = screen.getByText('footer-div')
    screen.debug()

    // Assert.
    expect(footer).toBeInTheDocument()

  })


  test('Render del componente Footer', () => {
    // Arrange.
    render(<Footer />)

    const footer = screen.getByTestId('footer-div')

    expect(footer).not.toBeNull()
  });

  test('It Should be contain "Incluit Course"', ()=>{
    // Arrange.
    render(<Footer />)
    const footerTitle = screen.getByText(/incluit course/i)

    expect(footerTitle).not.toBeUndefined()

  })

  test('It Should be contain "octubre - noviembre"', ()=>{
    // Arrange.
    render(<Footer />)
    const copy = /octubre - noviembre/i

    // Act.
    const footerTitle = screen.getByTestId('footer-div')

    // Assert
    expect(footerTitle).toHaveTextContent(copy)

  })
});
