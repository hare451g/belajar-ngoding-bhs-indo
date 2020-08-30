import ReactMarkdown from 'react-markdown';
import Wrapper from './Wrapper';

type propTypes = {
  content: string;
};

function Article({ content }: propTypes) {
  return (
    <article>
      <Wrapper>
        <ReactMarkdown source={content} />
      </Wrapper>
    </article>
  );
}

export default Article;
