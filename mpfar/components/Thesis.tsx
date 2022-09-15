import React from "react";
import Router from "next/router";
import ReactMarkdown from "react-markdown";

export type NameProps = {
    thesis: string[];
    abstract:string[];
    snsaccount: string[];
}

const Thesisfile: React.FC<{ Thesisfile: NameProps }> = ({ Thesisfile }) => {
    //const authorName = post.author ? post.author.name : "Unknown author";
    return (
      <div>
      <h1>{Thesisfile.thesis}</h1>
        <h2>{Thesisfile.abstract}</h2>
        <h3>{Thesisfile.snsaccount}</h3>
        
        <style jsx>{`
          div {
            color: inherit;
            padding: 2rem;
          }
        `}</style>
      </div>
    );
  };
  
  export default Thesisfile;