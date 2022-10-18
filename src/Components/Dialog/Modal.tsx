import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentFilter: string;
}

interface Strategy {
  price: () => JSX.Element;
  coupe: () => JSX.Element;
}

function getStuff(currentFilter: string) {
  const filters: Strategy = {
    coupe: () => {
      return (
        <>
          <p>{currentFilter}</p>
          <Box sx={{ width: 300 }}>
            <Slider
              getAriaLabel={() => "Temperature range"}
              value={10}
              onChange={() => {}}
              valueLabelDisplay="auto"
            />
          </Box>
        </>
      );
    },
    price: () => {
      return (
        <>
          <p>{currentFilter}</p>
          <Box sx={{ width: 300 }}>
            <Slider
              getAriaLabel={() => "Temperature range"}
              value={10}
              onChange={() => {}}
              valueLabelDisplay="auto"
            />
          </Box>
        </>
      );
    },
  };
  return filters[currentFilter as keyof Strategy];
}

export const Modal = ({ isOpen, onClose, currentFilter }: ModalProps) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Subscribe</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </DialogContentText>
        {currentFilter ? getStuff(currentFilter)() : null}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onClose}>Subscribe</Button>
      </DialogActions>
    </Dialog>
  );
};
