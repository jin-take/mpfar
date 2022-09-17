import React from "react"
import { GetStaticProps } from "next"
import Layout from "../components/Layout"
import Post, { PostProps } from "../components/Post"
import Profile, { ProfileProps } from "../components/Profile"
import thesis, { ThesisProps } from "../components/Thesis"
import Search from "../components/Search"
import prisma from '../lib/prisma'
import { PrismaClient } from "@prisma/client"
import Thesis from "../components/Thesis"

export const getStaticProps: GetStaticProps = async () => {
  const prisma = new PrismaClient()
  const data = await prisma.profile.findMany();
  const profile = JSON.parse(JSON.stringify(data));
  const data_t = await prisma.thesis.findMany();
  const thesisfile = JSON.parse(JSON.stringify(data_t));
  return {
    props: { profile, thesisfile},
    revalidate: 10,
  };
};

type Props = {
  profile: ProfileProps[],
  thesisfile:ThesisProps[]
}

const Blog: React.FC<Props> = (props) => {
    //console.log(props.profile)
    //console.log(props.thesisfile)

    let loginUser:ProfileProps = props.profile.find((user) => user.id === 'aaa')
    const loginUserThesis:ThesisProps[] = props.thesisfile.filter((thesis) => {
      if(loginUser !== undefined){
        return thesis.firstAuthorId === loginUser.id
      }
    })

  return (
    <Layout>
      <div className="page">
        <h1>タイムライン</h1>
        <main>
            <div className="post">
            <Profile profile={loginUser}/>
            </div>
        </main>
        <main>
          {loginUserThesis.map((post3) => (
            <div key={post3.id} className="post">
            <Thesis thesis={post3} />
            </div>
          ))}
        </main>
      </div>
      <Search searchData={props}/>
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
