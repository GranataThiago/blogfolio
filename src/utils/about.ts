import DocDental from '../assets/doc-dental.webp'
import Heurix from '../assets/heurix.webp'

export const WORK_EXPERIENCE = [
    {
        company: 'Heurix',
        image: Heurix.src,
        role: "Fullstack Developer",
        date: { from: "2021-11-01", to: "2023-01-30" }, 
        technologies: "Angular, Node, Express, Typescript, MySQL, MongoDB, AWS"
    },
    {
        company: 'Heurix',
        image: Heurix.src,
        role: "Fullstack Developer",
        date: { from: "2022-11-01", to: "2023-01-30" }, 
        technologies: "React, Typescript, Postgre, Nest"
    },
    {
        company: 'Freelancer',
        role: "Developer",
        date: { from: "2023-02-01", to: "2024-07-30" }, 
        technologies: "Astro, React, Node, Express, Shopify"
    },
    {
        company: 'DocDental',
        image: DocDental.src,
        role: "Frontend Developer",
        date: { from: "2024-08-01", to: "2024-12-31" }, 
        technologies: "Next"
    }
]