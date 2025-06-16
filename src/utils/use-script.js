import { useEffect, useState } from "react";

const useScript = (params) => {
  const { url, theme, issueTerm, repo, ref, label } = params;
  const [status, setStatus] = useState(url ? "loading" : "idle");

  useEffect(() => {
    if (!url) {
      setStatus("idle");
      return;
    }

    // Clear any existing utterances
    if (ref.current) {
      ref.current.innerHTML = "";
    }

    let script = document.createElement("script");
    script.src = url;
    script.async = true;
    script.crossOrigin = "anonymous";
    script.setAttribute("repo", repo);
    script.setAttribute("issue-term", issueTerm);
    script.setAttribute("theme", theme);
    
    if (label) {
      script.setAttribute("label", label);
    }

    // Add script to the ref element
    if (ref.current) {
      ref.current.appendChild(script);
    }

    const setAttributeStatus = (event) => {
      setStatus(event.type === "load" ? "ready" : "error");
    };

    script.addEventListener("load", setAttributeStatus);
    script.addEventListener("error", setAttributeStatus);

    return () => {
      if (script) {
        script.removeEventListener("load", setAttributeStatus);
        script.removeEventListener("error", setAttributeStatus);
      }
    };
  }, [url, theme, issueTerm, repo, ref, label]);

  return status;
};

export default useScript;
