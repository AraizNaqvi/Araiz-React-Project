function customRender(reactElement, container){

    let domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;

    for(let prop in reactElement.props){
        if(prop ===  'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domElement);
}

let reactElement = {
    type:'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google.'
}
let Root = document.querySelector('.root');

customRender(reactElement, Root)