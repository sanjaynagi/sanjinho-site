

import React, { useRef } from "react";
import useScript from "../utils/use-script";

const Comments = () => {
  const comment = useRef(null);

  const status = useScript({
    url: "https://utteranc.es/client.js",
    theme: "github-light",
    issueTerm: "pathname",
    repo: "sanjaynagi/sanjinho-site",
    ref: comment,
    label: "💬 comments", // Optional: adds a label to issues
  });

  return (
    <div className="w-full">
        <div ref={comment}></div>
    </div>
  );
};

export default Comments;
