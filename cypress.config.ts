import { defineConfig } from "cypress";


export default defineConfig({
    e2e: {
        baseUrl: "http://localhost:3000",
        excludeSpecPattern: "**/examples/*",
        viewportWidth: 1280,
        viewportHeight: 720,
    },
});
