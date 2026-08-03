import api from "./api";

export const getUsers = () =>
  api.get("/admin/users");

export const approveUser = (email) =>
  api.get(
    `/admin/users/approve?email=${email}`
  );

export const getBookings = () =>
  api.get("/admin/bookings");

export const getReportSummary = () =>
  api.get("/admin/reports/summary");


// new code

// ===============================
// SYSTEM OPERATIONS
// ===============================

export const getOperations = () =>
  api.get("/operations");

export const getActiveOperations = () =>
  api.get("/operations/active");

export const createOperation = (data) =>
  api.post("/operations", data);

export const updateOperation = (id, data) =>
  api.put(`/operations/${id}`, data);

export const toggleOperation = (id) =>
  api.patch(`/operations/${id}/toggle`);

export const deleteOperation = (id) =>
  api.delete(`/operations/${id}`);
