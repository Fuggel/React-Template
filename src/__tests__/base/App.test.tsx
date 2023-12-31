import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store";
import App from "../../App";


describe("App", () => {
    it("Should render the app", () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        );
        expect(screen.getByTestId("app")).toBeInTheDocument();
    });
});