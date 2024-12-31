import { Link } from 'react-router-dom';

const ProjectsList = ({ projects }) => {
    return (
        <>
        {projects.map(project => (
            <Link key={project.name} className="article-list-item" to={`/projects/${project.name}`}>
                <h3>{project.title}</h3>
                <p>{project.content[0].substring(0, 150)}...</p>
            </Link>
        ))}
        </>
    );
}

export default ProjectsList;