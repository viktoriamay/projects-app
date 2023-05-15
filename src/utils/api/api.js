const onResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};

class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getProjects() {
    return fetch(`${this._baseUrl}/projects/`, {
      method: "GET",
    }).then(onResponse);
  }

  getProjectByID(projectID) {
    return fetch(`${this._baseUrl}/projects/${projectID}/`, {
      method: "GET",
    }).then(onResponse);
  }

  getStudentsInfo() {
    return fetch(`${this._baseUrl}/student_infos/`, {
      method: "GET",
    }).then(onResponse);
  }
  getStudentByID(studentID) {
    return fetch(`${this._baseUrl}/student_infos/${studentID}/`, {
      method: "GET",
    }).then(onResponse);
  }

  createProject(newProject) {
    return fetch(`/project_create/`, {
      method: "POST",
      body: JSON.stringify(newProject),
      headers: this._headers,
    }).then(onResponse);
  }
}

const config = {
  baseUrl: "http://84.201.135.211:8002",
  headers: {
    "Content-Type": "application/json",
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
  },
};

const api = new Api(config);

export default api;
