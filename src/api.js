import ky from 'ky';

const URL = 'http://localhost:8000/v1'

const api = ky.create({
  prefixUrl: URL
})

// GET
export function getClasses() {
  return api.get('/classes')
}

export function getCourses() {
  return api.get('/courses')
}

export function getProfessors() {
  return api.get('/professors')
}

export function getStudentes() {
  return api.get('/students')
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