import React from "react";
import Router from "next/router";
import ReactMarkdown from "react-markdown";

export type ProfileProps = {
  id: string;
  name: string;
  email: string;
  comment: string;
  affiliation: string;
  society: string[];
  followBy: string[];
  following: string[];
  thesis: string[];
  snsacccount: string[];
};

const Profile: React.FC<{ profile: ProfileProps }> = ({ profile }) => {
  //const authorName = post.author ? post.author.name : "Unknown author";
  return (
    <div>
      <h2>{profile.name}</h2>
      <small> {profile.comment}</small>
      <style jsx>{`
        div {
          color: inherit;
          padding: 2rem;
        }
      `}</style>
    </div>
  );
};

export default Profile;
