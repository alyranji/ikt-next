import * as cheerio from 'cheerio';

export default function extractDOM(pageData) {
  if (pageData && pageData.content) {
    // Initialize Cheerio with the HTML content
    const $ = cheerio.load(pageData.content);
    const contentObj = {
      headings: [],
      paragraphs: [],
      spans: [],
      images: [],
    };

    // Extract headings
    $('h1, h2, h3, h4, h5, h6').each((i, el) => {
      contentObj.headings.push({
        tag: el.tagName,
        content: $(el).text(),
      });
    });

    // Extract paragraphs
    $('p').each((i, el) => {
      contentObj.paragraphs.push($(el).text());
    });

    // Extract spans
    $('span').each((i, el) => {
      contentObj.spans.push($(el).text());
    });

    // Extract images
    $('img').each((i, el) => {
      contentObj.images.push({
        src: $(el).attr('src'),
        alt: $(el).attr('alt'),
      });
    });

    return contentObj;
  }
}
