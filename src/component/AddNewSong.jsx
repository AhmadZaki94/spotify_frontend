import { useEffect, useState } from "react";
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import  Select  from "@mui/material/Select";

export const AddNewSong = () => {

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "" ,
        gender: "",
        age: "",
        tenth_score: "",
        twelth_score: "",
        preferred_branch: ""
    });

    const [data, setData] = useState([]);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id] : value,
        });
        console.log(e.target);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setData([...data, formData]);

        axios.post('', formData).then(() => {
            alert("Data Submitted");
        });
    };

    useEffect(() => {
        getData();
    },[]);

    const getData = () => {
        axios.get('').then((res) => {
            setData(res.data);
            // console.log(res.data);
        });
    };

    return (
      <Box>
        <form className="addstudent" onSubmit={handleSubmit}>
        <Box mb='25px'>
          Firstname:{" "}
          <TextField
            value={formData.first_name}
            onChange={handleChange}
            id="first_name"
            type="text"
            name="first_name"
            className="first_name"
            placeholder="enter first name"
          />
          
        </Box>
        <Box mb='25px'>
          {" "}
          Last Name:
          <TextField
            value={formData.last_name}
            onChange={handleChange}
            id="last_name"
            type="text"
            name="last_name"
            className="last_name"
            placeholder="enter last name"
            
          />
        </Box>
        <Box mb='25px'>
          {" "}
          Email:
          <TextField
            value={formData.email}
            onChange={handleChange}
            id="email"
            type="email"
            name="email"
            className="email"
            placeholder="enter email"
          />
        </Box>
  
        <Box mb='25px'>
          Gender: {/* NOTE: radio boxes only work when they have same `name`. */}
          <Box>
            Male
            <TextField
              onChange={handleChange}
              id="gender"
              name="gender"
              className="male"
              type="radio"
              value="male"
              checked={formData.gender === "male"}
            />{" "}
            Female{" "}
            <TextField
              onChange={handleChange}
              id="gender"
              name="gender"
              className="female"
              type="radio"
              value="female"
              checked={formData.gender === "female"}
            />
          </Box>
        </Box>
        <Box mb='25px'>
          Age{" "}
          <TextField  
            value={formData.age}
            onChange={handleChange}
            id="age"
            type="number"
            name="age"
            className="age"
            placeholder="enter age"
          />
        </Box>
        <Box mb='25px'>
          Tenth Score:{" "}
          <TextField
            value={formData.tenth_score}
            onChange={handleChange}
            id="tenth_score"
            type="number"
            name="tenth_score"
            className="tenth_score"
            placeholder="enter 10th score"
          />{" "}
        </Box>
        <Box mb='25px'>
          Twelth Score:{" "}
          <TextField
            value={formData.twelth_score}
            onChange={handleChange}
            id="twelth_score"
            type="number"
            name="twelth_score"
            className="twelth_score"
            placeholder="enter 12th score"
          />{" "}
        </Box>
        <Box>
          <Select
            onChange={handleChange}
            id="preferred_branch"
            value={formData.preferred_branch} // select dropdown needs both value and onChange attributes
            name="preferred_branch"
            className="preferred_branch"
          >
            <option value="law" id="law">law</option>
            <option value="commerce" id="commerce">commerce</option>
            <option value="science" id="science">science</option>
            <option value="sports" id="sports">sports</option>
            <option value="arts" id="arts">arts</option>
            <option value="acting" id="acting">acting</option>
          </Select>
        </Box>
  
        <TextField  className="submit" type="submit" value="Submit" />
      </form>

    </Box>
    );  
  };