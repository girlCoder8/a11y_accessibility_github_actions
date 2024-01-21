import App from "./App"
// @ts-ignore
import { render } from "@testing-library/react"
// @ts-ignore
import { axe, toHaveNoViolations } from "jest-axe"

// @ts-ignore
expect.extend(toHaveNoViolations)

// @ts-ignore
test("should not have any accessibility violations", async () => {
    // @ts-ignore
    const { container } = render(<App />)
    const results = await axe(container)
    // @ts-ignore
    expect(results).toHaveNoViolations()
})