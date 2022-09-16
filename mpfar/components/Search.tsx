import { useState, useEffect } from 'react';
import React from "react"
import prisma from '../lib/prisma'
import { PrismaClient } from "@prisma/client"
import Thesis from "../components/Thesis"


const Search: React.FC = (searchData) => {
  /*  const [showItems, setShowItems] = useState<GetStaticProps[]>([]);
    useEffect(() => {
        setShowItems(data);
  }, []);*/

  /*const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const result = data.filter((item) => {
      return 
        item.title.toLowerCase().match(e.target.value.toLowerCase());
        item.text.toLowerCase().match(e.target.value.toLowerCase());
    });
    console.log(result);
  };*/
  console.log(searchData.profile)

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
    </div>
  );
};

export default Search

/*
<div className='flex justify-between'>
        {showItems.map((item, i) => {
        })}
      </div>

*/
