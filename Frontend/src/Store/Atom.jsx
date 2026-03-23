import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

// Tell it to use sessionStorage instead of localStorage
const { persistAtom } = recoilPersist({
  storage: sessionStorage, // ✅ use session storage
});

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

export const Order = atom({
  key: "Order",
  default: {},
  effects_UNSTABLE: [persistAtom], // enables localStorage persistence
});
