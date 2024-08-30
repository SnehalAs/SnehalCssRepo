document.addEventListener('DOMContentLoaded', () => {
    const onBtn = document.getElementById('on-btn');
    const offBtn = document.getElementById('off-btn');
    const statusText = document.getElementById('status-text');
    const bulbImg = document.getElementById('bulb-img');
    const catImg = document.getElementById('cat-img');

    onBtn.addEventListener('click', () => {
        bulbImg.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png"; // Change this to the path of your on bulb image
        catImg.src =" https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png"; // Change this to the path of your cat eye image
        statusText.textContent = 'Switched On';
        onBtn.classList.add('disabled');
        offBtn.classList.remove('disabled');
        onBtn.style.backgroundColor = 'gray';
        offBtn.style.backgroundColor = 'red';
        bulbImg.style.display = 'block';
        catImg.style.display = 'block';
    });

    offBtn.addEventListener('click', () => {
        bulbImg.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png"; // Change this to the path of your off bulb image
        catImg.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png"; // Change this to the path of your cat image
        statusText.textContent = 'Switched Off';
        offBtn.classList.add('disabled');
        onBtn.classList.remove('disabled');
        offBtn.style.backgroundColor = 'gray';
        onBtn.style.backgroundColor = 'green';
        bulbImg.style.display = 'block';
        catImg.style.display = 'block';
    });
});
