import "./Work.scss";
import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";
import { WORK_ROUTE } from "../../routes/const";
import { getProjects } from "../../api/projects";
import { useState, useEffect } from "react";

const Work = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getProjects()
      .then((response) => {
        setProjects(response);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (projects.length === 0) {
    return <div>There are no projects yet.</div>;
  }

  return (
    <div className="work-container">
      <div className="work-intro">
        <h1 className="work-intro-title">/work.</h1>
        <p className="work-intro-description">
          Selected work I've taken on in the past
        </p>
      </div>
      <div className="all-cards-container">
        {projects.map((project) => (
          <Link key={project.id} to={`${WORK_ROUTE}/${project.id}`}>
            <Card imageURL={project.imageUrl} title={project.title} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Work;
