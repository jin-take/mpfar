import React from "react";
import Router from "next/router";
import ReactMarkdown from "react-markdown";

export type ThesisProps = {
    id: number;
  title :String;
  abstract : String;
  firstAuthor :String[];
  firstAuthorId: String[];
  otherAuthor   :   String[];
  tags      :   String[]
}

export type Tag = {
    id :number;  
    tagName: String[];
    thesis: String[];
}

export type ThesisOnTag ={
    thesis : String[];
    thesisId :number;
    tags : String[];
    tagId : number;
}



const thesis: React.FC<{ thesis: ThesisProps }> = ({ thesis }) => {
    //const authorName = post.author ? post.author.name : "Unknown author";
    return (
      <div>
        <h1>{thesis.id}</h1>
        <h2>{thesis.title}</h2>
        <h3>{thesis.abstract}</h3>
        <h3>{thesis.firstAuthor}</h3>
        <h3>{thesis.firstAuthorId}</h3>
        <h3>{thesis.otherAuthor}</h3>
        <h3>{thesis.tags}</h3>
        <style jsx>{`
          div {
            color: inherit;
            padding: 2rem;
          }
        `}</style>
      </div>
    );
  };
  
  export default thesis;