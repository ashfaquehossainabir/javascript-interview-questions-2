// Q-3: Explain Event Delegation
// Check it's output on file named index.html

document.querySelector('#products').addEventListener('click', (event) => {
    console.log(event);

    if(event.target.tagName === 'LI') {
        window.location.href += "#" + event.target.id;
    }
})