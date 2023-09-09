import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../store";
import Sidebar from "../../../components/layouts/Sidebar";


describe("Sidebar", () => {
    it("should render the sidebar", () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Sidebar />
                </BrowserRouter>
            </Provider>
        );
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    });

    it("should display the company name", () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Sidebar />
                </BrowserRouter>
            </Provider>
        );
        expect(screen.getByText("Template GmbH")).toBeInTheDocument();
    });
});
