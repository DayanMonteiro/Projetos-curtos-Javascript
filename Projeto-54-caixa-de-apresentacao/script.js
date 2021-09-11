const testimonialsContainer = document.querySelector(".testimonials-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");

const testimonials = [
  {
    name: "Laryssa Fuentes",
    position: "Marketing",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6",
    text: "Já trabalhei com literalmente centenas de desenvolvedores HTML / CSS e devo dizer que o primeiro lugar vai para ela. É uma desenvolvedora incrível. Ela enfatiza o código bom e limpo e presta atenção aos detalhes. Eu amo os desenvolvedores que respeitam cada aspecto de um design cuidadosamente pensado e fazem o melhor para colocá-lo no código. Ela vai além e transforma ART em PIXELS - sem falhas, sempre. ",
  },
  {
    name: "Alice Swger",
    position: "Software Engineer",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Essa mulher é uma desenvolvedora front-end incrível que entregou a tarefa exatamente como precisamos, faça um favor a você e contrate-a, você não ficará desapontado com o trabalho entregue. Ela fará um esforço extra para se certificar de que você está feliz com seu projeto. Com certeza irei trabalhar novamente com ela!",
  },
  {
    name: "Iida Niskanen",
    position: "Data Entry",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Ela é uma trabalhadora esforçada. A comunicação também era muito boa com ela e ela era muito ágil o tempo todo, algo que não é fácil de encontrar em muitos freelancers. Com certeza vamos repetir com ela.",
  },
  {
    name: "Renee Sims",
    position: "Receptionist",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "Ela faz tudo o que pode para fazer o trabalho bem feito. Esta é a segunda vez que o contratei e vou contratá-la novamente no futuro.",
  },
  {
    name: "Dayan Monteiro",
    position: "Graphic Designer",
    photo: "https://randomuser.me/api/portraits/men/43.jpg",
    text: "Tive minha preocupação de que, devido ao prazo apertado, esse projeto não pudesse ser concluído. Mas esse cara provou que eu estava errado, não só ele entregou um trabalho excelente, mas ele conseguiu entregar 1 dia antes do prazo. E quando pedi algumas revisões ele as fez em MINUTOS. Estou ansioso para trabalhar com ele novamente e o recomendo totalmente. Obrigado novamente!",
  },
  {
    name: "Sasha Ho",
    position: "Accountant",
    photo:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
    text: "Ela é uma designer de primeira linha e desenvolvedora de front-end. Ela se comunica bem, trabalha com rapidez e produz trabalhos de qualidade. Tivemos a sorte de trabalhar com ela!",
  },
  {
    name: "Junior Cintra",
    position: "Director",
    photo: "https://randomuser.me/api/portraits/men/97.jpg",
    text: "Esse cara é um jovem e talentoso profissional de TI, proativo e responsável, com uma forte ética de trabalho. Ele é muito forte em conversões PSD2HTML e tecnologia HTML / CSS. Ele aprende rápido, ansioso para aprender novas tecnologias. Ele é focado e tem boa dinâmica para cumprir prazos e resultados excepcionais.",
  },
];

let idx = 1;

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx];

  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;

  idx++;

  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}

setInterval(updateTestimonial, 10000);
