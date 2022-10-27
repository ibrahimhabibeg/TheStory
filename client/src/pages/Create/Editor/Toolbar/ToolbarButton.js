import { IconButton } from "@mui/material";

export default function ToolbarButton({
  editor,
  Icon,
  dispatchCommand,
  diapatchMessage,
  isTriggered,
}) {
  return (
    <IconButton
      sx={{
        bgcolor: isTriggered ? "ButtonHighlight" : "",
        borderRadius: 2.5,
        padding: 0.5,
        width: { md: 25, xs: 22 },
        marginX: .5,
      }}
      onClick={() => {
        if (diapatchMessage) {
          editor.dispatchCommand(dispatchCommand, diapatchMessage);
        } else {
          editor.dispatchCommand(dispatchCommand);
        }
      }}
    >
      <Icon sx={{ width: { md: 25, xs: 22 } }} />
    </IconButton>
  );
}
