export const openLink = (link: string) => () => {
  window.open(link);
};

export const openMail = () => {
  const windows = window.open('mailto:contato@fazcarreira.com');

  // <div><style>div: {position: fixed, top: 50%, left: 50%}</style><h1 style={{ textAlign: 'center', color: '#993399', fontFamily: 'Righteous'}}>OBRIGADO POR ENTRAR EM CONTATO</h1></div>')
  const div = document.createElement('div');
  const h1 = document.createElement('h1');
  h1.innerText += 'OBRIGADO POR ENTRAR EM CONTATO';
  div.style.padding = '5rem 5rem';
  h1.style.color = '#993399';
  div.append(h1);

  windows?.document.open();
  windows?.document.appendChild(div);
  windows?.document.close();
};
