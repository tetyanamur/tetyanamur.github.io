let $div = document.querySelector('blockquote');

let getJSON = url => {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('get', url, true); // asynchronous
    xhr.responseType = 'json';
    xhr.onload = () => {
      if (xhr.status === 200) resolve(xhr.response); // then
      else reject(xhr.status); // catch
    };
    xhr.send();
  });
};

getJSON('https://api.quotable.io/random')
  .then(data => {
    $div.textContent = data.content;
    aChild = document.createElement("credit");
    aChild.textContent = data.author;
    $div.appendChild(aChild);
    $div.classList.toggle('fadeInRight');
  })
  .catch(status => {
    //$div2_.textContent = 'Error: ' + status;
  });