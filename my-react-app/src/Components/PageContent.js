import React from 'react';

function PageContent({ page }) {
  let content;

  if (page === 'home') {
    content = <div>Content for the Home page</div>;
  } else if (page === 'about') {
    content = <div>Content for the About page</div>;
  } else if (page === 'skills') {
    content = <div>Content for the About page</div>;
  } else if (page === 'projects') {
    content = <div>Content for the Projects page</div>;
  } else if (page === 'contact') {
    content = <div>Content for the About page</div>;
  } else {
    content = <div>Page not found</div>;
  }

  return <div>{content}</div>;
}

export default PageContent;