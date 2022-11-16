import Editor from "./Editor/Editor";
import { Box } from "@mui/material";
import DateComponent from "./DateComponent";
import { getWriting, editWriting } from "../../api/writing.api";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Title from "./Title";
import SuspenseLoader from "../../components/Loaders/SuspenseLoader/SuspenseLoader";

export default function Create(props) {
  const { writingId } = useParams();
  const [initialWriting, setInitialWriting] = useState(null);
  const [initialTitle, setInitialTitle] = useState("");
  const [writing, setWriting] = useState(null);
  const [title, setTitle] = useState("");
  const [loadingInitialValues, setLoadingInitialValues] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getWriting(writingId).then((data) => {
      setInitialWriting(data.data.writing.text);
      setWriting(data.data.writing.text);
      setInitialTitle(data.data.writing.title);
      setTitle(data.data.writing.title);
      setLoadingInitialValues(false);
    });
  }, [writingId]);

  useEffect(() => {
    if (!loadingInitialValues) {
      const postData = { writingId, title, text: writing };
      editWriting(postData).catch((err) => {
        console.log(err);
        if (err.response.status === 401) {
          navigate(`/read/${writingId}`);
        }
      });
    }
  }, [writing, title, loadingInitialValues, writingId, navigate]);

  const updateTitle = (newTitle) => {
    setTitle(newTitle);
  };

  const updateText = (newWriting) => {
    setWriting(newWriting);
  };

  if (loadingInitialValues) return <SuspenseLoader />;
  return (
    <Box sx={{ justifyContent: "center" }}>
      <Title initialTitle={initialTitle} updateTitle={updateTitle} />
      <DateComponent />
      <Editor initialEditorState={initialWriting} updateText={updateText} />
    </Box>
  );
}
