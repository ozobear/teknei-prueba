import Head from 'next/head';
import Login from './components/Login';

const Index = () => {
  return (
    <div>
      <Head>
        <title>Iniciar sesión</title>
      </Head>
      <Login />
    </div>
  );
};

export default Index;