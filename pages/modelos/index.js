import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Filters from '../../components/Filters.js/Filters';
import ModelsGrid from '../../components/Grid/Grid';
import Header from '../../components/Header/Header';
import DropdownArrow from '../../components/Icons/Dropdown';
import { getModels } from '../../services/publicHandle';

export async function getStaticProps() {
  const data = await getModels();
  const models = data.data;

  return {
    props: {
      models,
    },
  };
}

export default function ModelsScreen({ models }) {
  const [sort, setSort] = useState(null);
  const [filter, setFilter] = useState(null);

  return (
    <>
      <Head>
        <title>EGO Challenge - Modelos</title>
        {/* <meta name='description' content='Generated by create next app' /> */}
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main className='mt-[43px] pb-[70px] px-[12px] lg:mt-[85px] max-w-[1063px] m-auto'>
        <h1 className='Text-Style-2 lg:Text-Style-6'>
          Descubrí todos los modelos
        </h1>
        <Filters models={models} setSort={setSort} setFilter={setFilter} />
        <ModelsGrid models={models} sort={sort} filter={filter} />
      </main>
    </>
  );
}