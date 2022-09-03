import { Box, Button, FormControl, TextField } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { BasicModal } from './BasicModal';

export const AddNewSong = () => {


  const [form, setForm] = useState({
      name: "",
      release_date: "",
      cover_image: "",
      artist: "",
      rating: ""
  });

  const [data, setData] = useState([]);

  const handleChange = (e) => {
      const { name, value }  = e.target;
      setForm({
          ...form,
          [name] : value,
      });
      console.log(e.target);
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      setData([...data, form]);

      axios.post('https://spotify-backend1.herokuapp.com/song', form)
      .then((r) => {
           alert("Song Added Successfully");
           console.log(r.data);
      })
      .catch((e) => console.log(e.message));
  };

  return (
      <Box boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" margin='auto' mt='25px' width='350px' border="1px solid white" p='25px' bgcolor='#f5f5f5'>
          <form onSubmit={handleSubmit}>
            <Box>
              <FormControl>
                <TextField value={form.name} onChange={handleChange} name="name" id="my-input" aria-describedby="my-helper-text" placeholder='Song Name' />
              </FormControl>
            </Box>
            <Box mt="25px">
              <FormControl>
                <TextField value={form.release_date} onChange={handleChange} name="release_date" id="my-input" aria-describedby="my-helper-text" placeholder='Date Released' />
              </FormControl>
            </Box>
            <Box mt="25px">
              <FormControl>
                <TextField value={form.cover_image} onChange={handleChange} type='file' name="cover_image" id="my-input" aria-describedby="my-helper-text" placeholder='Art Work' />
              </FormControl>
            </Box>
            <Box mt="25px">
              <FormControl>
                <TextField value={form.artist} onChange={handleChange} name="artist" id="my-input" aria-describedby="my-helper-text" placeholder='Artists' />
              </FormControl>
            </Box>
            <Box mt="25px">
              <FormControl>
                <TextField value={form.rating} onChange={handleChange} name="rating" id="my-input" aria-describedby="my-helper-text" placeholder='Rating' />
              </FormControl>
            </Box>
            <Box display='flex' border='1px solid white' m='auto' marginTop='25px' width='275px' justifyContent='space-evenly'>
              <TextField type='submit' value="Submit" />
              <Button variant='outlined'><BasicModal/></Button>
            </Box>
          </form>
      </Box>
  );
};




