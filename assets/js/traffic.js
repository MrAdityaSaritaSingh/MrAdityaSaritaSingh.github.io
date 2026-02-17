/**
 * Traffic Detection & Channel Attribution
 *
 * Must load synchronously BEFORE any analytics scripts.
 *
 * 1. Internal traffic filtering
 *    - localhost/127.0.0.1/0.0.0.0 → always internal
 *    - ?internal=1 → sets localStorage flag (persists across sessions)
 *    - ?internal=0 → clears the flag
 *    Sets window.__internal (boolean) for downstream scripts.
 *
 * 2. Channel attribution
 *    - ?ref=<slug> → stored in sessionStorage for the visit
 *    - Falls back to ?utm_source if no ?ref
 *    Sets window.__ref (string|null) for downstream scripts.
 *    Channel slugs are defined in _data/channels.yml.
 */
(function () {
  var params = new URLSearchParams(window.location.search);

  // --- Internal traffic ---
  if (params.has("internal")) {
    var flag = params.get("internal");
    if (flag === "1") {
      localStorage.setItem("internal", "1");
    } else if (flag === "0") {
      localStorage.removeItem("internal");
    }
  }

  var host = window.location.hostname;
  var isLocal =
    host === "localhost" || host === "127.0.0.1" || host === "0.0.0.0";

  window.__internal =
    isLocal || localStorage.getItem("internal") === "1";

  // --- Channel attribution ---
  var ref = params.get("ref") || params.get("utm_source") || null;
  if (ref) {
    sessionStorage.setItem("ref", ref);
  }
  window.__ref = sessionStorage.getItem("ref") || null;
})();
