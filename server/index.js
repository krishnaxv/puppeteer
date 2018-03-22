import express from 'express';
import cors from 'cors';
import React from 'react';
import { renderToString } from 'react-dom/server';
import puppeteer from 'puppeteer';
import axios from 'axios';

import App from '../src/';

const app = express();
app.use(cors());

async function getPostList() {
  return await axios.get('https://jsonplaceholder.typicode.com/posts');
}

app.get('/', (request, response) => {
  getPostList().then(postData => {
    const { data: postList } = postData;

    (async () => {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.setContent(renderToString(<App postList={postList} />));
      await page.pdf({ path: './downloads/1.pdf', format: 'A4' });

      await browser.close();
    })();
    const file = './downloads/1.pdf';
    return response.download(file);
  });
});

app.listen(3001, () => console.log('Example app listening on port 3001!'));
