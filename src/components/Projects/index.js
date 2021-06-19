import './styles.css'
import projects from '../../projects'
import ProjectCard from '../ProjectCard';

function Projects({ isRender }) {

    return (

        <>
            {isRender && (
                <>
                    <div className="description">
                        <h1>Projetos</h1>
                        <p>Aqui encontrará alguns projetos de minha autoria que eu quero dar um destaque especial, sendo esse o meu pequeno portfólio para mostrar minhas capacidades de criação e de solução de problemas. Fique a vontade para clicar em um dos cards e ver mais detalhes sobre algum projeto específico</p>
                    </div>
                    <div className="projects">

                        {projects.map((project, index) => <ProjectCard project = {project} id = {index}/>)}

                    </div>


                </>
            )}

        </>

    )

}

export default Projects;