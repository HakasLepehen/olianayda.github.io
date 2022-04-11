document.addEventListener('DOMContentLoaded', async function (event) {
  /* parser of page */
  console.time();
  function hasChild(el) {
    const arr = el.childNodes;
    if (el.hasChildNodes() && el.tagName !== 'SCRIPT') {
      if (arr.length && arr.length === 1) {
        console.log(el.childNodes[0].parentElement?.innerText);

      } else {
        arr.forEach((el) => {
          hasChild(el);
        })
      }
    }
  }
  hasChild(document.body);
  console.timeEnd();
})