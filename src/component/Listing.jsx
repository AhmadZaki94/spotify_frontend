import axios from "axios";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from "react"
import { Rating } from "@mui/material";

export const Listing = () => {

    const [songData, setSongData] = useState([]);



    const getData = () => {
        axios.get("https://spotify-backend1.herokuapp.com/song")
        .then((r) => {
            setSongData(r.data);
            console.log(r.data);
        })
        .catch((e) => console.log(e.data));
    }

    useEffect(() => {
        getData();
    },[]);

    songData.sort((a,b) => (
        b.rating - a.rating
    ));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



    return (
        <TableContainer>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Art Work</StyledTableCell>
              <StyledTableCell>Song</StyledTableCell>
              <StyledTableCell>Date Of Release</StyledTableCell>
              <StyledTableCell>Artists</StyledTableCell>
              <StyledTableCell>Rate</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {songData.map((e) => (
              <StyledTableRow key={e._id}>
                <StyledTableCell component="th" scope="row">
                  <img src={e.cover_image} alt="" height="150px" width='175px' />
                </StyledTableCell>
                <StyledTableCell>{e.name}</StyledTableCell>
                <StyledTableCell>{e.release_date}</StyledTableCell>
                <StyledTableCell>{e.artist_id[0].name}</StyledTableCell>
                <StyledTableCell>
                  {/* <Rating name="half-rating-read" defaultValue={e.rating} precision={1} readOnly /> */}
                  <Rating />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
}





