import Main from '@/templates/Main';
import Head from 'next/head';


const Index = () => {
  return (
  
    <>
    <Head>
      <title>TalentPortal</title>
      <meta property="og:title" content="cryptechsalt" key="title" />
      <link href="/dist/main.css" rel="stylesheet"></link>
      <script src="https://cdn.tailwindcss.com"></script>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    </Head>
    <Main />
  </>

  );
};

export default Index;
