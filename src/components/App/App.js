import { useEffect, useState } from "react";
import "./App.scss";
import api from "../../utils/api/api";
import { AppContext } from "../../utils/context/AppContext";
import { Header } from "../Header/Header";
import { Route, Routes } from "react-router-dom";
import { ProjectsPage } from "../../pages/ItemsPages/ProjectsPage/ProjectsPage";
import { ProjectInfoPage } from "../../pages/InfoPages/ProjectInfoPage/ProjectInfoPage";
import { StudentsPage } from "../../pages/ItemsPages/StudentsPage/StudentsPage";
import { StudentInfoPage } from "../../pages/InfoPages/StudentInfoPage/StudentInfoPage";
import { Modal } from "../Modal/Modal";
import { AddProjectForm } from "../AddProjectForm/AddProjectForm";
import { Footer } from "../Footer/Footer";

function App() {
  const [projects, setProjects] = useState([]);
  const [studentsInfo, setStudentsInfo] = useState([]);
  const [activeModal, setActiveModal] = useState(false);

  useEffect(() => {
    api
      .getProjects()
      .then((data) => setProjects(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    api
      .getStudentsInfo()
      .then((data) => setStudentsInfo(data))
      .catch((error) => console.log(error));
  }, []);

  const createProjectRequest = (newProject) => {
    api
      .createProject({ ...newProject })
      .then((newProject) => setProjects((state) => [newProject, ...state]))
      .catch((error) => alert(error))
      .finally(() => setActiveModal(false));
  };

  const valueContextProvider = {
    projects,
    setProjects,
    studentsInfo,
    setStudentsInfo,
    activeModal,
    setActiveModal,
    createProjectRequest,
  };

  return (
    <AppContext.Provider value={valueContextProvider}>
      <div className="App">
        <Header />
        <main className="main">
          <div className="container">
            <Routes>
              <Route path="/projects-app" element={<ProjectsPage />} />
              <Route path="/students-info" element={<StudentsPage />} />
              <Route path="/project/:projectID" element={<ProjectInfoPage />} />
              <Route path="/student/:studentID" element={<StudentInfoPage />} />
            </Routes>
          </div>
        </main>
        <Modal>
          <AddProjectForm />
        </Modal>
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default App;
