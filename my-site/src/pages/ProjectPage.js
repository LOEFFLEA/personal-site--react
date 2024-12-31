import { useParams } from 'react-router-dom';
import projects from './project-content';
import NotFoundPage from './NotFoundPage';

const ProjectPage = () => {
    const { projectId } = useParams();
    const project = projects.find(project => project.name == projectId);

    if(!project) {
        return <NotFoundPage />
    }

    return (
        <>
        <h1>{project.title}</h1>
        {project.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
        ))}
        </>
    );
}

export default ProjectPage;