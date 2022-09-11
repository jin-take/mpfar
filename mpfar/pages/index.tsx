import React from "react"
import { GetStaticProps } from "next"
import Layout from "../components/Layout"
import Post, { PostProps } from "../components/Post"
import Profile, { ProfileProps } from "../components/Profile"
import prisma from '../lib/prisma'

export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  const data = await prisma.profile.findMany();
  const profile = JSON.parse(JSON.stringify(data));
  return {
    props: { feed, profile },
    revalidate: 10,
  };
};

type Props = {
  feed: PostProps[],
  profile: ProfileProps[]
}

const Blog: React.FC<Props> = (props) => {
    console.log(props.profile)
  return (
    <Layout>
      <div className="page">
        <h1>タイムライン</h1>
        <main>
          {props.feed.map((post) => (
            <div key={post.id} className="post">
              <Post post={post} />
            </div>
          ))}
        </main>
        <main>
          {props.profile.map((post2) => (
            <div key={post2.id} className="post">
            <Profile profile={post2} />
            </div>
          ))}
        </main>
      </div>
      <style jsx>{`
        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin-top: 2rem;
        }
      `}</style>
    </Layout>
  )
}

export default Blog
