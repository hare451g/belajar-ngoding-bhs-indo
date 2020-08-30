import fs from 'fs';
import ArticleRenderer from '../app/containers/Article';
import Flex from '../app/components/Flex';
import Text from '../app/components/Text';

type Article = {
  title: string;
  filename: string;
  content?: string;
};

type ArticleList = Array<Article>;

type propTypes = {
  articles: ArticleList;
};

export async function getStaticProps() {
  const path = `${process.cwd()}/public/content`;
  const contents: ArticleList = [
    {
      title: 'Daftar Isi',
      filename: 'daftar-isi',
    },
    {
      title: 'Blog dan Berita',
      filename: 'blog-dan-berita',
    },
    {
      title: 'Panduan Interaktif',
      filename: 'panduan-interaktif',
    },
    {
      title: 'Panduan Berbasis Teks',
      filename: 'panduan-berbasis-teks',
    },
    {
      title: 'Panduan Berbasis Video',
      filename: 'panduan-berbasis-video',
    },
    {
      title: 'Bahasa Pemrograman dalam Bahasa Indonesia',
      filename: 'bahasa-pemrograman-dalam-bahasa-indonesia',
    },
    {
      title: 'Komunitas Pemrogram Indonesia',
      filename: 'komunitas-pemrogram-indonesia',
    },
    {
      title: 'Belajar Bahasa Inggris',
      filename: 'belajar-bahasa-inggris',
    },
  ];

  const articles = contents.map((content) => ({
    ...content,
    content: fs.readFileSync(`${path}/${content.filename}.md`, 'utf-8'),
  }));

  return {
    props: {
      articles,
    },
  };
}

function HomePage({ articles = [] }: propTypes) {
  return (
    <Flex
      maxWidth={['320px', '720px', '980px']}
      justifyContent="center"
      flexDirection="column"
      m="auto"
    >
      <Flex
        p="0.5rem"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        height="50vh"
      >
        <Text textAlign="center" fontSize="2rem" mb="1.25rem">
          Belajar Ngoding Bahasa Indonesia
        </Text>
        <Text textAlign="center" fontSize="1rem">
          Daftar sumber materi gratis untuk belajar pemrograman dan/atau berkode
          dalam bahasa Indonesia, diurutkan secara alfabetis. Tetapi karena
          kemampuan berbahasa Inggris bakal tetap penting, ditambahkan juga di
          paling bawah sumber materi gratis untuk belajar dan berlatih bahasa
          Inggris.
        </Text>
      </Flex>

      {articles.map(({ content, filename, title }) => (
        <Flex
          flexDirection="column"
          key={filename}
          mb="1.5rem"
          as="section"
          id={filename}
        >
          <Text fontSize="1.5rem">{title}</Text>
          <ArticleRenderer content={content} />
        </Flex>
      ))}
    </Flex>
  );
}

export default HomePage;
