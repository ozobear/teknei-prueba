import Head from 'next/head';
import Users from '../components/Users';
import Header from '../components/Header';
import Footer from '../components/Footer';

const UsersPage = () => {
  return (
    <div>
      <Head>
        <title>Usuarios</title>
      </Head>
      <Header />
      <Users />
      <Footer />
    </div>
  );
};

export default UsersPage;