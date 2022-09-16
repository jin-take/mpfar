import { useState, useEffect } from 'react';
import React from "react"
import { GetStaticProps } from "next"
import Layout from "../components/Layout"
import Post, { PostProps } from "../components/Post"
import Profile, { ProfileProps } from "../components/Profile"
import thesis, { ThesisProps } from "../components/Thesis"
import prisma from '../lib/prisma'
import { PrismaClient } from "@prisma/client"
import Thesis from "../components/Thesis"

export const getStaticProps: GetStaticProps = async () => {
    const prisma = new PrismaClient()
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
    const data_t = await prisma.thesis.findMany();
    const thesisfile = JSON.parse(JSON.stringify(data_t));
    return {
      props: { feed, profile,thesisfile},
      revalidate: 10,
    };
  };

export const Search: React.FC = () => {
    const [showItems, setShowItems] = useState<GetStaticProps[]>([]);
    useEffect(() => {
        setShowItems(data);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const result = data.filter((item) => {
      return 
        item.title.toLowerCase().match(e.target.value.toLowerCase());
        item.text.toLowerCase().match(e.target.value.toLowerCase());
    });
    console.log(result);
  };

  return (
    <div>
      <form action='' className='flex justify-center'>
        <input
          type='text'
          className='my-8  rounded border border-black'
          placeholder='search'
          onChange={(e) => handleChange(e)}
        />
      </form>
      <div className='flex justify-between'>
        {showItems.map((item, i) => {
        })}
      </div>
    </div>
  );
};
