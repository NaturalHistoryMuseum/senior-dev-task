import React from "react"
import { render, screen } from "@testing-library/react"
import { Footer } from "./"

describe("Footer", () => {
  it("renders correctly", () => {
    render(<Footer />)

    const footer = screen.getByText(
      /The Trustees of The Natural History Museum, London/i
    )

    expect(footer).toBeInTheDocument()
  })

  it("renders the NHM logo, which links to the NHM homepage", () => {
    render(<Footer />)

    const nhmLogoLink = screen.getByRole("link", {
      name: /natural history museum logo/i,
    })

    expect(nhmLogoLink).toBeInTheDocument()
    expect(nhmLogoLink).toHaveAttribute("href", "https://www.nhm.ac.uk")
  })

  it("links to URLs in the NHM website", () => {
    render(<Footer />)

    const contactLink = screen.getByRole("link", {
      name: /Contact us/i,
    })

    expect(contactLink).toHaveAttribute(
      "href",
      "https://www.nhm.ac.uk/contact-us.html"
    )

    const privacyLink = screen.getByRole("link", {
      name: /Privacy notice/i,
    })

    expect(privacyLink).toHaveAttribute(
      "href",
      "https://www.nhm.ac.uk/about-us/privacy-notice.html"
    )

    const termsConditionsLink = screen.getByRole("link", {
      name: /Terms & conditions/i,
    })

    expect(termsConditionsLink).toHaveAttribute(
      "href",
      "https://www.nhm.ac.uk/about-us/ticketing-terms-and-conditions-of-sale.html"
    )

    const slaveryStatementLink = screen.getByRole("link", {
      name: /Human Slavery Statement/i,
    })

    expect(slaveryStatementLink).toHaveAttribute(
      "href",
      "https://www.nhm.ac.uk/content/dam/nhmwww/about-us/governance/policies-and-procedures/modern-slavery-statement.pdf"
    )

    const accessibilityStatementLink = screen.getByRole("link", {
      name: /Website Accessibility Statement/i,
    })

    expect(accessibilityStatementLink).toHaveAttribute(
      "href",
      "https://www.nhm.ac.uk/about-us/website-accessibility-statement.html"
    )
  })
})
