export function addItem(val: any, config = { color: 'black'}) {
  const textnode = document.createTextNode(val);
  
  const node = document.createElement('li');
  node.style.color = config.color;
  node.appendChild(textnode);
  
  document.getElementById('output').appendChild(node);
}
