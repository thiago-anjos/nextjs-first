import sanitizeHtml from 'sanitize-html';

function createMarkup(value) {
  return { __html: sanitizeHtml(value) };
}

export default createMarkup;
