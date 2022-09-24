let e;

// e = document.head;
// e = document.body;
// e = document.body.firstElementChild;
// e = document.body.firstElementChild.firstElementChild;
// e = document.doctype;
// e = document.doctype.name;
// e = document.forms[0][1];
// e = document.forms[0];
// e = document.scripts;
// e = document.scripts[2];
// e = document.scripts[2].getAttribute['src'];

// e = document.getElementsByClassName('collection-item');
// e = document.getElementById('main');
// e = document.getElementById('task-form');
// e = document.querySelector("#filter");
// e = document.getElementsByName('task');
// e = document.getElementsByTagName('div');

// e = document.querySelector('div .row');
// e = document.querySelector('span');
// e = document.querySelector('input#task');
// e = document.querySelector('li:first-child').innerText;
// e = document.querySelector('li:last-child').innerText;
e = document.querySelector('li:nth-child(3)').innerText;
console.log(e);