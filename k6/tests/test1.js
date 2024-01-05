import http from 'k6/http';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";

export const options = {
  thresholds: {
    http_req_duration: ["p(95)<150"],
  },
  vus: 10,
  duration: "10s",
};

export default function () {
  const response = http.get("https://test-api.k6.io/public/crocodiles/");
}

export function handleSummary(data) {
  return {
    "load_test_report.html": htmlReport(data),
    stdout: textSummary(data, { indent: " ", enableColors: true }),
  };
}
