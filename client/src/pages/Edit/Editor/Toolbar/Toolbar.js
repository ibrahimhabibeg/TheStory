import {
  $getSelection,
  $isRangeSelection,
  FORMAT_TEXT_COMMAND,
  FORMAT_ELEMENT_COMMAND,
  UNDO_COMMAND,
  REDO_COMMAND,
} from "lexical";
import { useCallback, useEffect, useState } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { mergeRegister } from "@lexical/utils";
import {
  FormatBold,
  FormatItalic,
  FormatAlignLeft,
  FormatAlignCenter,
  FormatAlignRight,
  Undo,
  Redo,
} from "@mui/icons-material";
import { Box } from "@mui/system";
import ToolbarButton from "./ToolbarButton";


export default function Toolbar() {
  const [editor] = useLexicalComposerContext();
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  
  const updateToolbar = useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      setIsBold(selection.hasFormat("bold"));
      setIsItalic(selection.hasFormat("italic"));
    }
  }, [editor]); // eslint-disable-line

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          updateToolbar();
        });
      })
    );
  }, [updateToolbar, editor]);

  return (
    <Box
      sx={{
        marginX: "auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <ToolbarButton
        editor={editor}
        Icon={Undo}
        dispatchCommand={UNDO_COMMAND}
      />
      <ToolbarButton
        editor={editor}
        Icon={Redo}
        dispatchCommand={REDO_COMMAND}
      />
      <ToolbarButton
        editor={editor}
        Icon={FormatBold}
        dispatchCommand={FORMAT_TEXT_COMMAND}
        diapatchMessage={"bold"}
        isTriggered={isBold}
      />
      <ToolbarButton
        editor={editor}
        Icon={FormatItalic}
        dispatchCommand={FORMAT_TEXT_COMMAND}
        diapatchMessage={"italic"}
        isTriggered={isItalic}
      />
      <ToolbarButton
        editor={editor}
        Icon={FormatAlignLeft}
        dispatchCommand={FORMAT_ELEMENT_COMMAND}
        diapatchMessage={"left"}
      />
      <ToolbarButton
        editor={editor}
        Icon={FormatAlignCenter}
        dispatchCommand={FORMAT_ELEMENT_COMMAND}
        diapatchMessage={"center"}
      />
      <ToolbarButton
        editor={editor}
        Icon={FormatAlignRight}
        dispatchCommand={FORMAT_ELEMENT_COMMAND}
        diapatchMessage={"right"}
      />
    </Box>
  );
}
