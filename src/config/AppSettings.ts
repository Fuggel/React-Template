import { IAppSettings } from "../interfaces/IAppSettings";


export const appSettings: IAppSettings = {
    darkMode: false,
    outboundUrl: String(process.env.REACT_APP_OUTBOUND_URL) || "http://localhost:3001",
    inboundUrl: String(process.env.REACT_APP_INBOUND_URL) || "http://localhost:3000",
};