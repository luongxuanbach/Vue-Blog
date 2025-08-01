// src/utils/auth.js
export function getCurrentUser() {
  const raw = localStorage.getItem('user')
  try {
    return raw ? JSON.parse(raw) : null
  } catch (err) {
    return null
  }
}