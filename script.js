document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.querySelector('.envelope-wrapper');
    const btnOpen = document.querySelector('#open');
    const btnReset = document.querySelector('#reset');

    envelope.addEventListener('click', () => {
        envelope.classList.toggle('open');
    });

    btnOpen.addEventListener('click', () => {
        envelope.classList.add('open');
    });

    btnReset.addEventListener('click', () => {
        envelope.classList.remove('open');
    });
});
