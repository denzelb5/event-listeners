console.log('hi');

const printToDom = (toPrint, divId) => {
    document.getElementById(divId).innerHTML += toPrint;
}

let pieList = [{
    name: 'pumpkin',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Pumpkin-Pie-Slice.jpg',
    instructor: 'Zoe'
},
{
    name: 'cherry',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Cherry-Pie-Slice.jpg',
    instructor: 'Michael'
},
{
    name: 'key lime',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Keylimepiecut.jpg',
    instructor: 'Callan'
},
{
    name: 'peach',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Peach_pie_%286043640689%29.jpg',
    instructor: 'Zoe'
},
{
    name: 'apple',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Apple_pie.jpg',
    instructor: 'Callan'
},
{
    name: 'chocolate',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Sliced_black_walnut_and_chocolate_pie_%285772382054%29.jpg',
    instructor: 'Greg'
}]

const pieBuilder = (pieArr) => {
    for (let i = 0; i < pieArr.length; i++) {
        const pies = pieArr[i];
        const domString = `
        <div class="card">
        <h2>${pies.name}</h2>
        <img src='${pies.image}' alt='Image of ${pies.name}'>
        <h4>${pies.instructor}</h4>
        </div>
        `
    printToDom(domString, 'pie-zone')
    }
}

pieBuilder(pieList)

//document.getElementById('my-button').addEventListener('click', ()=> {
 //   console.log('bike')
//})