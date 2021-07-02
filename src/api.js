import ky from 'ky';

const URL = 'http://localhost:8000/v1'

const api = ky.create({
  prefixUrl: URL
})

// GET
export function getClasses() {
  return api.get('classes').json()
}

export function getCourses() {
  return api.get('courses').json()
}

export function getProfessors() {
  return api.get('professors').json()
}

export function getStudentes() {
  return api.get('students').json()
}

// POSTS
export function login(email, password) {
  return api.post('login', { json: { email, password } }).json()
}

export function saveClasses({ location, availablePlaces, startDate, endDate, courseId, professorId }) {
  return api.post('classes', { json: {
    location, availablePlaces, startDate, endDate, courseId, professorId
  }})
}

export function saveCourses({ name, workload, description }) {
  return api.post('courses', { json: {
    name, workload, description
  }})
}

export function saveProfessors({ name, email, password, phone, gender, birthday, role = "professor" }) {
  return api.post('professors', { json: {
    name, email, password, phone, gender, birthday, role
  }})
}

export function saveStudentes({ name, email, password, phone, gender, birthday, role = "student" }) {
  return api.post('students', { json: {
    name, email, password, phone, gender, birthday, role
  }})
}