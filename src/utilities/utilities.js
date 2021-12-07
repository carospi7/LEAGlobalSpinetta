const object = [
    {
        id: '1',
        title: 'Seguro de avería de maquinaria',
        price: '270USD',
        pictureUrl: 'https://tienda.lea-global.com/wp-content/uploads/2021/11/rotura-de-maquinas.jpg',
        stock: '10',
        date:'Mayo',
        modules: '5',
        hours: '25',
        description: 'El seminario se desarrolla a través de 5 módulos en una moderna plataforma de e-learning a partir de ejercicios individuales que van guiando al participante en la incorporación, interpretación y aplicación de los principales conceptos requeridos para el análisis de riesgos y suscripción de pólizas que incluyen la cobertura de rotura de máquinas. Los ejercicios comienzan con el conocimiento del riesgo desde las cuestiones más básicas, como los distintos tipos de máquinas asegurables y las averías que pueden sufrir cada una, analizaremos la necesidad de este seguro a través de un repaso e los siniestros más frecuentes y graves ocurridos en los últimos años en centrales de generación de energía, mineras, empresas manufactureras y la agro-industria, entre otras.',
        tutors: [{
            name: 'Roberto Pérez',
            profession: 'Engineer',
            pictureUrl: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
        },
        {
            name: 'Sonia Rodriguez',
            profession: 'Engineer',
            pictureUrl: 'https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
        }]
    },
    {
        id: '2',
        title: 'Seguros de CAR/EAR en Latinoamérica',
        price: '220USD',
        pictureUrl: 'https://tienda.lea-global.com/wp-content/uploads/2020/04/curso-car-ear-lea.jpg',
        stock: '3'
    },
    {
        id: '3',
        title: 'Seguros para la industria del Oil & Gas',
        price: '140USD',
        pictureUrl: 'https://tienda.lea-global.com/wp-content/uploads/2021/11/oil-gas-600x400.jpg',
        stock: '8'
    },
    {
        id: '4',
        title: 'Introducción al seguro de riesgo',
        price: '400USD',
        pictureUrl: 'https://tienda.lea-global.com/wp-content/uploads/2021/11/introduccion-al-seguro-600x400.jpg',
        stock: '1'
    }
]

export const getItems = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(object), 3000)
    })
}

export const getItem = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(object[0]), 2000)
    })
}