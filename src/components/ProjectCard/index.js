import './styles.css'

function ProjectCard({ project:{link, name, about, tags}, id }) {

    return (

        <a className="project-card" href={link} id={`a${id}`}>

            <div className="infos">

                <h3>{name}</h3>
                <p>{about}</p>


            </div>

            <div className="tags">
                {tags.map(tag => <span >{tag.text}</span>)}
            </div>
        </a>
    )

}

export default ProjectCard;