console.log('hi');

const printToDom = (toPrint, divId) => {
    document.getElementById(divId).innerHTML = toPrint;
}

let pies = [{
    name: 'pumpkin',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Pumpkin-Pie-Slice.jpg',
    instructor: 'zoeee'
},
{
    name: 'cherry',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Cherry-Pie-Slice.jpg',
    instructor: 'michael'
},
{
    name: 'key lime',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Keylimepiecut.jpg',
    instructor: 'callan'
},
{
    name: 'peach',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Peach_pie_%286043640689%29.jpg',
    instructor: 'zoeee'
},
{
    name: 'apple',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Apple_pie.jpg',
    instructor: 'callan'
},
{
    name: 'chocolate',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Sliced_black_walnut_and_chocolate_pie_%285772382054%29.jpg',
    instructor: 'greg'
}]

const pieBuilder = (pieArr) => {
    let domString = ''
    for (let i = 0; i < pieArr.length; i++) {
        const pies = pieArr[i];
        domString += `
        <div class="card">
        <h2>${pies.name}</h2>
        <img src='${pies.image}' alt='Image of ${pies.name}'>
        
        </div>
        `
    
    }
    printToDom(domString, 'pie-zone')
}



//document.getElementById('my-button').addEventListener('click', ()=> {
  //  console.log('bike')
//})

 
    //figure out who this instructor is thr the button we clicked on
    const buttonClick = (e) => {
    const instructor = event.target.id
    
    // only get those pies from the list of all the pies
    const selectedPies = []
    for (let i = 0; i < pies.length; i++) {
        const pie = pies[i]
        if (pie.instructor === instructor) {
            selectedPies.push(pie)
        }
    }
    // pass small list of pies back into the pie builder function
    pieBuilder(selectedPies)
}
document.getElementById('zoeee').addEventListener('click', buttonClick)


document.getElementById('michael').addEventListener('click', (event) => {
    //figure out who this instructor is thr the button we clicked on
    const instructor = event.target.id
    
    // only get those pies from the list of all the pies
    const selectedPies = []
    for (let i = 0; i < pies.length; i++) {
        const pie = pies[i]
        if (pie.instructor === instructor) {
            selectedPies.push(pie)
        }
    }
    // pass small list of pies back into the pie builder function
    pieBuilder(selectedPies)
})

//pieBuilder(pies)

