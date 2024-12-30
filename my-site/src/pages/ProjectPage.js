import { useParams } from 'react-router-dom';
import projects from './project-content';

const ProjectPage = () => {
    const { projectId } = useParams();
    const project = projects.find(project => project.name == projectId);
    return (
        <>
        <h1>{project.title}</h1>
        {project.content.map(paragraph => (
            <p>{paragraph}</p>
        ))}
        </>
    );
}

export default ProjectPage;