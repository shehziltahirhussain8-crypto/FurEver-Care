import { useEffect, useState } from "react";

/**
 * Wraps the browser Geolocation API. Handles permission denial and missing
 * support gracefully so the rest of the app never breaks because of it.
 */
export function useGeolocation() {
  const [state, setState] = useState({
    status: "idle", // idle | loading | granted | denied | unsupported
    coords: null,
    error: null,
  });

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      setState({ status: "unsupported", coords: null, error: "Geolocation is not supported by this browser." });
      return;
    }

    setState((s) => ({ ...s, status: "loading" }));

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setState({
          status: "granted",
          coords: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          },
          error: null,
        });
      },
      (error) => {
        setState({ status: "denied", coords: null, error: error.message || "Location permission denied." });
      },
      { timeout: 8000 }
    );
  }, []);

  return state;
}
