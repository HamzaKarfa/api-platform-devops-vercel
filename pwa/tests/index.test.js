import { render, screen } from "@testing-library/react";
import App from "../pages/index";

describe("App", () => {
    it("renders without crashing", () => {
        render( < App /> );
        const title = document.querySelector('h1')
        expect(title).toBeInTheDocument();
    });
});