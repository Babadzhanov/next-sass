import React from 'react';
import NextHead from 'next/head';

const Head = () => (
  <NextHead>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Next-Sass</title>
    <meta name="description" content="example app" />
    <link rel="stylesheet" href="static/css/main.css" />
  </NextHead>
);

export default Head;