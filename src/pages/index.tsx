import { type NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name='description' content='Generated by create-t3-app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1 className='h1'>Heading 1</h1>
      <h1 className='h2'>Heading 2</h1>
      <h1 className='h3'>Heading 3</h1>
      <h1 className='h4'>Heading 4</h1>
      <h1 className='h5'>Heading 5</h1>
      <h1 className='h6'>Heading 6</h1>

      <button className='btn btn-primary'>One</button>
      <button className='btn btn-secondary'>Second</button>
    </>
  );
};

export default Home;
