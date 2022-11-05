import SuspenseLoader from "../../components/Loaders/SuspenseLoader/SuspenseLoader";
import { initializeWriting } from "../../api/writing.api";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function Create() {
  const [writingId, setWritingId] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    initializeWriting()
      .then((data) => {
        setWritingId(data.data.writingId);
      })
      .catch((err) => navigate(-1));
  }, [navigate]);
  if (!writingId) return <SuspenseLoader />;
  else return <Navigate to={`/edit/${writingId}`} />;
}
