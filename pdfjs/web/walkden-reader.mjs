import {
  PDFViewerApplication,
  PDFViewerApplicationOptions,
} from "./viewer.mjs";

const compactReader = window.matchMedia("(max-width: 750px)").matches;

PDFViewerApplicationOptions.set(
  "scrollModeOnLoad",
  compactReader ? 0 : 3
);

PDFViewerApplicationOptions.set(
  "spreadModeOnLoad",
  compactReader ? 0 : 2
);

PDFViewerApplicationOptions.set("defaultZoomValue", "page-fit");

const loadingScreen = document.getElementById("whpReaderLoading");

PDFViewerApplication.initializedPromise.then(() => {
  PDFViewerApplication.eventBus.on("pagesloaded", () => {
    loadingScreen.classList.add("ready");
  });
});
