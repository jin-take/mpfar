import React from "react";
import Router from "next/router";
import ReactMarkdown from "react-markdown";

export type ThesisProps = {
    id: 100;
  title :"論文タイトル";
  abstract : ["著者A","著者B","著者C"];
  firstAuthor :"著者A";
  firstAuthorId: "AF903";
  otherAuthor   :["著者B","著者C"] ;
  tags      :   ["A","B","C"];
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