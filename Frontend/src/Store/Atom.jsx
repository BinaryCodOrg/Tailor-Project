import { atom } from "recoil"

export const defaultUrl = atom({
    key: "defaultUrl",
    default: "http://localhost:7000",
    // default: "",
});

export const AllData = atom({
    key: "AllDat",
    default: [],
    // default: "",
});

export const SelectedLang = atom({
    key: "SelectedLang",
    default: "eng",
    // default: "",
});

export const WebContent = atom({
    key: "WebContent",
    default: {},
    // default: "",
});

export const Orders = atom({
    key: "Orders",
    default: [
        // {
        //     index: 1,
        //     receivedDate: "2024-12-01",
        //     name: "John Doe",
        //     phoneNumber: "0300-1234567",
        //     returnDate: "2024-12-01",
        //     status: "Delivered",
        // },
    ],
    // default: "",
});




