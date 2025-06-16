<<<<<<< Updated upstream

import { useEffect, useState } from "react";

// we need a function that accepts the script src and couple of other parameters

const useScript = (params) => {
  const { url, theme, issueTerm, repo, ref } = params;

  const [status, setStatus] = useState(url ? "loading" : "idle");

  console.log(params);

  // run the useEffect when the url of the script changes
  useEffect(() => {
      if (!url) {
        setStatus("idle");
        return;
      }

      let script = document.createElement("script");
      script.src = url;
      script.async = true;
      script.crossOrigin = "anonymous";
      script.setAttribute("theme", theme);
      script.setAttribute("issue-term", issueTerm);
      script.setAttribute("repo", repo);

      // Add script to document body
      ref.current.appendChild(script);

      // store status of the script

      const setAttributeStatus = (event) => {
        /**
         * Console.log value from event
            {
                bubbles: false
                cancelBubble: false
                cancelable: false
                composed: false
                currentTarget: null
                defaultPrevented: false
                eventPhase: 0
                isTrusted: true
                path: [script]
                returnValue: true
                srcElement: null
                target: null
                timeStamp: 276483.5
                type: "load"
            }

            based on the type property we will get know whether script is ready or errored out
            */

        setStatus(event.type === "load" ? "ready" : "error");

      };

      script.addEventListener("load", setAttributeStatus);
      script.addEventListener("error", setAttributeStatus);

      return () => {
       // useEffect clean up
        if (script) {
          script.removeEventListener("load", setAttributeStatus);
          script.removeEventListener("error", setAttributeStatus);
        }
      };

  }, [url]);
  return status;
};

export default useScript;
=======
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
>>>>>>> Stashed changes
