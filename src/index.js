import _ from 'lodash';

import './style.scss';

import title from './title.html';

document.body.innerHTML = title;

document.addEventListener("DOMContentLoaded", () => {
  import('./content.html')
      .then(m => m.default)
      .then(parseHTML)
      .then(obj => {
        document.querySelector('div.content').appendChild(obj);
      });

  import('./footer.html')
      .then(m => m.default)
      .then(parseHTML)
      .then(obj => {
        document.body.appendChild(obj);
      });
});

function parseHTML(html) {
  let tmpl = document.createElement('template');
  tmpl.innerHTML = html;
  return tmpl.content;
}
