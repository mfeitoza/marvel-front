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
export function saveClasses() {

}

export function saveCourses() {

}

export function saveProfessors() {

}

export function saveStudentes() {
  
}