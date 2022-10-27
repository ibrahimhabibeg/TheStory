import { $getRoot, $getSelection } from "lexical";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import Toolbar from "./Toolbar/Toolbar";
import { Box } from "@mui/material";

const onError = (err) => {};

const onChange = (editorState) => {
  editorState.read(() => {
    const root = $getRoot();
    const selection = $getSelection();
  });
};

export default function Editor() {
  const initialConfig = {
    namespace: "Editor",
    theme: {},
    onError,
  };
  return (
    <Box
      className="rounded-sm shadow-sm  border-gray-200"
      sx={{
        position: "relative",
        width: "95%",
        maxWidth: 800,
        marginX: "auto",
        mb: 2,
      }}
    >
      <LexicalComposer initialConfig={initialConfig}>
        <RichTextPlugin
          contentEditable={
            <ContentEditable
              style={{
                minHeight: 450,
                outline: "none",
                paddingBottom: 15,
                paddingLeft: 10,
                paddingRight: 10,
                overflow:"hidden"
              }}
            />
          }
          placeholder={
            <Box sx={{position:"absolute", top:15, left:10, color:"GrayText", pointerEvents:"none"}}>
              Type your marvelous story ...
            </Box>
          }
          sx={{ padding: 10 }}
        />
        <Toolbar />
        <OnChangePlugin onChange={onChange} />
        <HistoryPlugin />
      </LexicalComposer>
    </Box>
  );
}
