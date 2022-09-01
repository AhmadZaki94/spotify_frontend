import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios';
import { FormControl, InputLabel, TextField } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const BasicModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [formData, setFormData] = React.useState({
    name: "",
    dob: "",
    bio: ""
  });
  const [data, setData] = React.useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(e.target);
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      setData([...data, formData]);

      axios.post("https://spotify-backend1.herokuapp.com/artist", formData)
      .then((r) => {
        alert("Artist Addedd Successfully");
        console.log(r.data);
      })
      .catch((e) => console.log(e.message));
  }

  return (
    <div>
      <Button onClick={handleOpen}>+ Add Artist</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Artist
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <form onSubmit={handleSubmit}>
              <Box mt='25px'>  
                <FormControl>
                  <InputLabel htmlFor="my-input">Artist Name</InputLabel>
                  <TextField value={formData.name} onChange={handleChange} name="name" id="my-input" aria-describedby="my-helper-text" />
                </FormControl>
              </Box>
              <Box mt='25px'>  
                <FormControl>
                  <InputLabel htmlFor="my-input">Date Of Birth</InputLabel>
                  <TextField value={formData.dob} onChange={handleChange} name="dob" id="my-input" aria-describedby="my-helper-text" />
                </FormControl>
              </Box>
              <Box mt='25px'>  
                <FormControl>
                  <InputLabel htmlFor="my-input">Bio</InputLabel>
                  <TextField value={formData.bio} onChange={handleChange} name="bio" id="my-input" aria-describedby="my-helper-text" />
                </FormControl>
              </Box>
            </form>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
