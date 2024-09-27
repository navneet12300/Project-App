const questions = [
    {
        'que': 'What is the primary purpose of React?',
        'a': 'Server-side rendering',
        'b': 'Building user interfaces',
        'c': 'Database management',
        'd': 'Network security',
        'correct': 'b'
    },
    {
        'que': 'Which of the following is a lifecycle method in React?',
        'a': 'componentWillMount',
        'b': 'renderComponent',
        'c': 'initState',
        'd': 'createElement',
        'correct': 'a'
    },
    {
        'que': 'What is JSX?',
        'a': 'JavaScript XML',
        'b': 'JSON Syntax Extension',
        'c': 'JavaScript Execution',
        'd': 'Java Source Extension',
        'correct': 'a'
    },
    {
        'que': 'Which hook is used for managing state in functional components?',
        'a': 'useEffect',
        'b': 'useReducer',
        'c': 'useState',
        'd': 'useContext',
        'correct': 'c'
    },
    {
        'que': 'What do you use to pass data from a parent component to a child component?',
        'a': 'props',
        'b': 'state',
        'c': 'context',
        'd': 'refs',
        'correct': 'a'
    },
    {
        'que': 'What is the correct way to update state in a React component?',
        'a': 'this.state = newState',
        'b': 'this.setState(newState)',
        'c': 'this.updateState(newState)',
        'd': 'this.refreshState(newState)',
        'correct': 'b'
    },
    {
        'que': 'What is the purpose of the useEffect hook?',
        'a': 'To handle events',
        'b': 'To manage component lifecycle',
        'c': 'To create components',
        'd': 'To manage context',
        'correct': 'b'
    },
    {
        'que': 'Which of the following is used to prevent component re-renders?',
        'a': 'PureComponent',
        'b': 'FunctionalComponent',
        'c': 'MemoComponent',
        'd': 'RenderComponent',
        'correct': 'a'
    },
    {
        'que': 'What is the purpose of keys in React?',
        'a': 'To style components',
        'b': 'To uniquely identify elements',
        'c': 'To manage state',
        'd': 'To optimize performance',
        'correct': 'b'
    },
    {
        'que': 'Which of the following is not a valid way to create a component in React?',
        'a': 'Class component',
        'b': 'Function component',
        'c': 'Stateless component',
        'd': 'HTML component',
        'correct': 'd'
    },
    {
        'que': 'What does Redux primarily help with?',
        'a': 'Routing',
        'b': 'State management',
        'c': 'API requests',
        'd': 'Styling components',
        'correct': 'b'
    },
    {
        'que': 'What is React Router used for?',
        'a': 'State management',
        'b': 'API calls',
        'c': 'Routing in React applications',
        'd': 'Styling',
        'correct': 'c'
    },
    {
        'que': 'What is the output of a React component?',
        'a': 'HTML string',
        'b': 'React element',
        'c': 'JavaScript object',
        'd': 'CSS file',
        'correct': 'b'
    },
    {
        'que': 'Which function is used to create a React element?',
        'a': 'createComponent',
        'b': 'render',
        'c': 'createElement',
        'd': 'newElement',
        'correct': 'c'
    },
    {
        'que': 'What is the context API used for?',
        'a': 'Managing state',
        'b': 'Passing data through the component tree',
        'c': 'Creating components',
        'd': 'Handling events',
        'correct': 'b'
    }
]


let index=0;
let total = questions.length;
let right=0;
let wrong=0;

const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll('.options');


const loadQuestion = () => {
    if(index== total){
        return endQuiz();
    }
    reset();
    const data = questions[index]
    quesBox.innerText = `${index+1}) ${data.que} `;
    optionInputs[0].nextElementSibling.innerText=data.a;
    optionInputs[1].nextElementSibling.innerText=data.b;
    optionInputs[2].nextElementSibling.innerText=data.c;
    optionInputs[3].nextElementSibling.innerText=data.d;
}

const submitQuiz=()=>{
    const data = questions[index];
    const ans = getAnswer()
    if(ans==data.correct){
        right++;
    }
    else{
       wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if(input.checked){
             answer = input.value;
            }
        }
    )
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz=()=>{
    document.querySelector(".box").innerHTML = `
    <div style="text-align:center">
    <h3>Thank Your for Playing the Quiz</h3>
    <h2>${right}/${total} </h2>
    </div>`;
}


loadQuestion();