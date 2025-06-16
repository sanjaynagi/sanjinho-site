

import React, { useRef } from "react";
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
import useScript from "../utils/use-script";

const Comments = () => {
  const comment = useRef(null);

  const status = useScript({
    url: "https://utteranc.es/client.js",
    theme: "github-light",
<<<<<<< Updated upstream
    issueTerm: "url",
    repo: "sanjaynagi/sanjinho-site",
    ref: comment
=======
    issueTerm: "pathname",
    repo: "sanjaynagi/sanjinho-site",
    ref: comment,
    label: "💬 comments", // Optional: adds a label to issues
>>>>>>> Stashed changes
  });

  return (
    <div className="w-full">
<<<<<<< Updated upstream
      {
        <div ref={comment}></div>
      }
=======
        <div ref={comment}></div>
>>>>>>> Stashed changes
    </div>
  );
};

export default Comments;
