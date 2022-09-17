import { useState, useEffect } from 'react';
import React from "react"
import prisma from '../lib/prisma'
import { PrismaClient } from "@prisma/client"
import { ThesisProps } from "../components/Thesis"
import { ProfileProps } from "../components/Profile"

/*type Props = {
  searchData: {
    profile: ProfileProps[],
    thesisfile: ThesisProps[],
  }
} */

const Search: React.FC = (searchData) => {
  const [addtext, setAddText] = useState('');
  const [text, setText] = useState('');
  /*  const [showItems, setShowItems] = useState<GetStaticProps[]>([]);
    useEffect(() => {
        setShowItems(data);
  }, []);*/
  const SearchResult: React.FC = (search) => {
    console.log(search)
  if(search === ''){
    return
  }else{
    const thesisData:ThesisProps = searchData.searchData.thesisfile.filter((thesis) => {
      return thesis.firstAuthorId === search
    })
    return (
      <main>
      <p>www</p>
      {thesisData.map((thesis) => (
            <div key={thesis.id} className="post">
            <Thesis thesis={thesis} />
            </div>
          ))}
      </main>
    )
  }
}
  /*const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const result = data.filter((item) => {
      return 
        item.title.toLowerCase().match(e.target.value.toLowerCase());
        item.text.toLowerCase().match(e.target.value.toLowerCase());
    });
    console.log(result);
  };*/
  console.log(searchData.searchData.profile)

  return (
    <div>
      <form action='' className='flex justify-center'>
        <input
          type='text'
          value={addtext}
          placeholder='search'
          onChange={(e) => setAddText(e.target.value)}
        />
        <button onClick={(event) => setText(addtext)}>検索</button>
      </form>
      <SearchResult search = {text} />
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
