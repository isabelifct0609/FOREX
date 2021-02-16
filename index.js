// VARIABLE

let botones = document.querySelectorAll('button');
// console.log(botones);

let year = document.querySelector('h2');

// EVENTOS

botones[1].addEventListener('click', () => { 
  year.innerText = 2018; 
});

botones[2].addEventListener('click', () => { location.href = 'assets/monedas/AUDJYP/AUDJPY.html'; });
botones[3].addEventListener('click', () => { location.href = 'assets/monedas/GBPUSD/GBPUSD.html'; });
botones[4].addEventListener('click', () => { location.href = 'assets/monedas/EURCAD/EURCAD.html'; });
botones[5].addEventListener('click', () => { location.href = 'assets/monedas/EURUSD/EURUSD.html'; });
botones[6].addEventListener('click', () => { location.href = 'assets/monedas/USDCHF/USDCHF.html'; });
botones[7].addEventListener('click', () => { location.href = 'assets/monedas/USDJPY/USDJPY.html'; });
botones[8].addEventListener('click', () => { location.href = 'assets/monedas/AUDUSD/AUDUSD.html'; });