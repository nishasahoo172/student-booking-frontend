import { useEffect, useState } from "react";
import { Navigate, useLocation, useParams } from "react-router-dom";
import api from "../services/api";
import { COURSES } from "../data/courses";

export default function SchedulerAccessGuard({ children }) {
  const { slug } = useParams();
  const location = useLocation();

  const [loading, setLoading] = useState(true);
  const [allowed, setAllowed] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setLoading(false);
      return;
    }

    const course = COURSES.find(
      (c) => c.slug.toLowerCase() === (slug || "").toLowerCase()
    );

    if (!course) {
      setLoading(false);
      setError({
        title: "Course Not Found",
        message: "The requested scheduler does not exist.",
      });
      return;
    }

    async function checkAccess() {
      try {
        await api.get("/scheduler/access", {
          params: {
            vendor: course.vendor,
            course: course.slug,
          },
        });

        setAllowed(true);
      } catch (err) {
        if (
          err?.response?.status === 403 &&
          err?.response?.data?.code === "COURSE_ACCESS_DENIED"
        ) {
          setError({
            title:
              err.response.data.title || "Access Restricted",
            message:
              err.response.data.message ||
              "You do not have access to this course.",
          });
        } else {
          setError({
            title: "Something went wrong",
            message:
              "Unable to verify your access. Please try again.",
          });
        }
      } finally {
        setLoading(false);
      }
    }

    checkAccess();
  }, [slug]);

  if (loading) {
    return (
      <div style={{ padding: 80, textAlign: "center" }}>
        Checking access...
      </div>
    );
  }

  if (!localStorage.getItem("token")) {
    return (
      <Navigate
        to={`/${slug}`}
        state={{ from: location }}
        replace
      />
    );
  }

  if (!allowed) {
    return (
      <div
        style={{
          maxWidth: 700,
          margin: "80px auto",
          background: "#fff",
          borderRadius: 12,
          padding: 40,
          textAlign: "center",
          boxShadow: "0 10px 30px rgba(0,0,0,.08)",
        }}
      >
        <div style={{ fontSize: 60 }}>🚫</div>

        <h2>{error?.title}</h2>

        <p>{error?.message}</p>

        <button
          onClick={() => window.history.back()}
          style={{
            marginTop: 20,
            padding: "12px 24px",
            cursor: "pointer",
          }}
        >
          Go Back
        </button>
      </div>
    );
  }

  return children;
}