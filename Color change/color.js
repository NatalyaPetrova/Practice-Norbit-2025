function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function changeBodyColor() {
    document.body.style.backgroundColor = getRandomColor();
    document.body.style.color = getRandomColor();
  }

  setInterval(changeBodyColor,2000);



