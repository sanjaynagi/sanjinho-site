import { useEffect, useState } from "react";

export default function useBetterMediaQuery(mediaQueryString) {
  const [matches, setMatches] = useState(null);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQueryString);
    const listener = (event) => setMatches(event.matches);
    
    // Set initial value
    setMatches(mediaQueryList.matches);

    // Modern way to add the listener
    mediaQueryList.addEventListener("change", listener);
    
    // Cleanup function
    return () => mediaQueryList.removeEventListener("change", listener);
  }, [mediaQueryString]);

  return matches;
}