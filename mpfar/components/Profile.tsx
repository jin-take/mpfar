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
  snsaccount: string[];
};

const Profile: React.FC<{ profile: ProfileProps }> = ({ profile }) => {
  //const authorName = post.author ? post.author.name : "Unknown author";
  return (
    <div>
    <h1>{profile.id}</h1>
      <h2>{profile.name}</h2>
      <h3>{profile.email}</h3>
      <small> {profile.comment}</small>
      <h3>{profile.affiliation}</h3>
      <h3>{profile.society}</h3>

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


