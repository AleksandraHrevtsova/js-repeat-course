console.log('CLONE elements');
const body = document.querySelector('body');

const button = document.createElement('button');
button.textContent = 'click';
button.classList.add('btn-1');

body.insertAdjacentElement('afterbegin', button);

const section = document.querySelector('.elements-1');

const cloneBtn = button.cloneNode(true);
cloneBtn.classList.replace('btn-1', 'btn-2')
section.insertAdjacentElement('afterbegin', cloneBtn);

const newCloneBtn = cloneBtn.cloneNode();
newCloneBtn.textContent = 'Submit';
newCloneBtn.classList.remove('btn-2');
newCloneBtn.classList.add('btn-3');
section.insertAdjacentElement('afterend', newCloneBtn);