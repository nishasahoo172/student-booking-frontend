import axios from "axios";

const API = "http://localhost:5001/api/admin";

export const getStudentById = (id) =>
  axios.get(`${API}/users/${id}`);

export const getStudentCredits = (id) =>
  axios.get(`${API}/users/${id}/credits`);

export const addCredits = (
  id,
  amount,
  reason
) =>
  axios.post(
    `${API}/users/${id}/add-credit`,
    {
      amount,
      reason,
    }
  );

export const rejectStudent = (
  id,
  reason
) =>
  axios.put(
    `${API}/users/${id}/reject`,
    { reason }
  );

export const updateStudent = (
  id,
  data
) =>
  axios.put(
    `${API}/users/${id}`,
    data
  );

export const reactivateStudent = (id) =>
  axios.put(
    `${API}/users/${id}/reactivate`
  );

/* =========================
   COURSE ASSIGNMENT
========================= */

export const getStudentCourses = (id) =>
  axios.get(
    `${API}/users/${id}/courses`
  );

export const saveStudentCourses = (
  id,
  courseIds
) =>
  axios.post(
    `${API}/users/${id}/courses`,
    {
      courseIds
    }
  );

  // APPROVE STUDENT COURSE

export const approveStudentCourse = (
  userId,
  courseId
) =>
  axios.put(
    `${API}/users/${userId}/courses/${courseId}/approve`
  );

  export const assignStudentCourses = (
  id,
  courseIds
)=>
axios.post(
  `${API}/users/${id}/assign-course`,
  {
    courseIds
  }
);

export const removeStudentCourse = (
 userId,
 courseId
)=>
axios.put(
 `${API}/users/${userId}/courses/${courseId}/remove`
);

export const getRescheduleHistory = () =>
  axios.get(
    `${API}/reschedule-history`
  );