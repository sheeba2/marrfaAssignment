let avail = [
    'Marrfa',
    'Assignment',
    'How much time it will take to learn web dev',
    'How to get started with web dev',
    'Skillset for development',
    'Pace of learning',
    'Javascript',
    'Where to learn web dev',
    'which is best paid or unpaid'
];

const resultBox = document.querySelector('.result-box')

const inputBox = document.getElementById('input-box')

inputBox.onkeyup = function(){
    let result =[];
    let input = inputBox.value;
    if(input.length){
        result = avail.filter((key)=>{
            return key.toLowerCase().includes(input.toLowerCase());
        });

        console.log(result);
    }
    display(result);
    if(!result.length){
        resultBox.innerHTML='';
    }
}

function display(result){
    const content = result.map((list)=>{
        return "<li onclick=selectInput(this)>" + list +"<li>";

    });

    resultBox.innerHTML = "<ul>"+ content.join('') +"</ul>";

}

function selectInput(list){
    inputBox.value = list.innerHTML;
    resultBox.innerHTML='';

}