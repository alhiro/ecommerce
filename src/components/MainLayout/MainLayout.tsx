import HeaderMeta from './HeaderMeta';
import MainNav from './MainNav/MainNav';
import Footer from './MainFooter';
import { Layout } from 'antd';

const { Content } = Layout;

interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

const MainLayout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <HeaderMeta title={title} />
      <Layout>     
        {/* <MainNav />    */}
        <Content style={{ minHeight: '500px', marginBottom: '55px' }}>{children}</Content>       
        <Footer />
      </Layout>
    </>
  );
};

export default MainLayout;
