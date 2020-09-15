import Head from 'next/head';

import 'antd-mobile/dist/antd-mobile.less';

interface HeaderMetaProps {
  title: string;
}

const globalStyles = `
html {
  line-height: 1.15;
  -ms-text-size-adjust: 100%;
}
`

const HeaderMeta: React.FC<HeaderMetaProps> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width, maximum-scale=1, minimum-scale=1, user-scalable=no" />
      <style type='text/css'>{globalStyles}</style>
    </Head>
  );
};

export default HeaderMeta;
