const users = [
    {
        id: 1,
        name: 'Ramon Diogo',
        image: 'http://www.politize.com.br/wp-content/uploads/2015/12/brazil-dilma-rousseff.jpg',
    },

    {
        id: 2,
        name: 'Antobio Adalberto',
        image: 'http://www.apelidos.net/wp-content/uploads/2012/02/cabeca_grande.jpg',
    },

    {
        id: 3,
        name: 'Alexandre Henrique Shailesh Zeta-Jones',
        image: 'http://www.apelidos.net/wp-content/uploads/2012/02/cabeca_grande.jpg',
    },
]

const db = [
    {
        id: 1,
        title: `Obama Offers Hopeful Vision While Noting Nation's Fears`,
        text: `In his last State of the Union address, President Obama sought to paint a hopeful portrait. But he acknowledged that many Americans felt shut out of a political and economic sytem they view as rigged.`,
        image: `http://ep00.epimg.net/elpais/imagenes/2016/05/01/estilo/1462073892_519434_1462100685_noticia_fotograma.jpg`,
        tag: 'POLITICS',
        user: users[1],
    },
    {
        id: 2,
        title: `Didi Kuaidi, The Company Beating Uber In China, Opens Its API To Third Party Apps`,
        text: `One day after Uber updated its API to add 'content experiences' for passengers, the U.S. company's biggest rival - Didi Kuaidi in Chine - has opened its own platform up by releasing an SDK for developers and third-parties.`,
        image: `https://3.bp.blogspot.com/-W__wiaHUjwI/Vt3Grd8df0I/AAAAAAAAA78/7xqUNj8ujtY/s1600/image02.png`,
        tag: 'POLITICS',
        user: users[0],
    },
    {
        id: 3,
        title: `NASA Formalies Efforts To Protect Earth From Asteroids`,
        text: `Last Week, NASA announced a new program called the Planetary Defense Coordination Office (PDCO) which will coordinate NASA's efforts for detecting and tracking near-Earth objects (NEOs). If a large object comes hurtling toward our planet...`,
        image: `https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg`,
        tag: 'SCIENCE',
        user: users[2],
    },
    {
        id: 4,
        title: `For Some Atlanta Hawks, a Revved-Up Game of Uno Is Diversion No. 1`,
        text: `The favored in-flight pasttime of a group of players including Al Horford, Kent Bazemore and Dennis Schroder is a schoolchildren's card game with some added twists.`,
        image: `http://ep00.epimg.net/elpais/imagenes/2016/05/01/estilo/1462073892_519434_1462100685_noticia_fotograma.jpg`,
        tag: 'SPORTS',
        user: users[0],
    },
    {
        id: 5,
        title: `Picking a Windows 10 Security Package`,
        text: `Oscar the Grouch has a recycling bin and Big Bird has moved to a tree as the children's classic debuts on HBO, aiming at a generation that doesn't distinguish between TV and mobile screens.`,
        image: `http://ep00.epimg.net/elpais/imagenes/2016/05/01/estilo/1462073892_519434_1462100685_noticia_fotograma.jpg`,
        tag: 'TECH',
        user: users[0],
    },
    {
        id: 6,
        title: `As U.S. Modernizes Nuclear Weapons, 'Smaller' Leaves Some Uneasy`,
        text: `The Energy Department and the Pentagon have been readying a weapon with a build-it-smaller approach, setting off a philosofical clash in the world of nuclear arms.`,
        image: `http://ep00.epimg.net/elpais/imagenes/2016/05/01/estilo/1462073892_519434_1462100685_noticia_fotograma.jpg`,
        tag: 'SCIENCE',
        user: users[2],
    },
]


export default db
