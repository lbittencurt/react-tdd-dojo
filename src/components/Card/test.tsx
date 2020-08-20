import { render, screen, fireEvent } from '@testing-library/react'

import Card from '.'

describe('Card', () => {
  //title [OK]
  it('Should card render heading title', () => {
    render(<Card />)
    expect(
      screen.getByRole('heading', { name: /react component/i })
    ).toBeInTheDocument()
  })

  //subtitle [OK]
  it('Should card render heading subtitle', () => {
    render(<Card />)
    expect(
      screen.getByRole('heading', { name: /how to create a component/i })
    ).toBeInTheDocument()
  })

  //button [OK]
  it('Should card render an submit button', () => {
    render(<Card />)
    expect(screen.getByRole('button', { name: /create/i })).toBeInTheDocument()
  })

  //card
  it('Should card render article with card role', () => {
    render(<Card />)
    expect(screen.getByRole('card')).toBeInTheDocument()
  })

  //style [OK]
  it('Should card render and take snapshot', () => {
    const { container } = render(<Card />)
    expect(container.firstChild).toMatchSnapshot()
  })
  it('Should card button has primary color', () => {
    const SUBMIT_BUTTON_COLOR = '#456FE8'

    render(<Card />)
    const buttonContainer = screen.getByRole('button', { name: /create/i })
    expect(buttonContainer).toHaveStyle({
      'background-color': SUBMIT_BUTTON_COLOR
    })
  })

  //logic [OK]
  it('Should button change text to "creating..." when clicked', () => {
    render(<Card />)
    const buttonContainer = screen.getByRole('button', { name: /create/i })

    fireEvent.click(buttonContainer)

    expect(buttonContainer).toHaveTextContent('Creating')
  })
})
