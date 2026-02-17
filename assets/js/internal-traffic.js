/**
 * Internal Traffic Detection
 *
 * Prevents developer/internal traffic from polluting analytics data.
 * Must load synchronously BEFORE any analytics scripts.
 *
 * How it works:
 *   - localhost/127.0.0.1/0.0.0.0 → always internal
 *   - Visit ?internal_traffic=1 → sets localStorage flag (persists across sessions)
 *   - Visit ?internal_traffic=0 → clears the flag
 *
 * Sets window.__internal_traffic (boolean) for downstream scripts to check.
 */
(function () {
  var params = new URLSearchParams(window.location.search);
  if (params.has("internal_traffic")) {
    var flag = params.get("internal_traffic");
    if (flag === "1") {
      localStorage.setItem("internal_traffic", "1");
    } else if (flag === "0") {
      localStorage.removeItem("internal_traffic");
    }
  }

  var host = window.location.hostname;
  var isLocal =
    host === "localhost" || host === "127.0.0.1" || host === "0.0.0.0";

  window.__internal_traffic =
    isLocal || localStorage.getItem("internal_traffic") === "1";
})();
