import fs from 'fs';
import Article from '../app/containers/Article';

type propTypes = {
  content: string;
};

export async function getStaticProps() {
  const path = `${process.cwd()}/public/content`;
  const content = fs.readFileSync(`${path}/main.md`, 'utf-8');

  return {
    props: {
      content,
    },
  };
}

function HomePage({ content = '' }: propTypes) {
  return <Article content={content} />;
}

export default HomePage;
