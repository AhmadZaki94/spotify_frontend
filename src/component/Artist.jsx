import { useState, useEffect } from "react";
import axios from "axios";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export const Artist = () => {

    const [artistData, setArtistData] = useState([]);

    const getArtistData = () => {
        axios.get("https://spotify-backend1.herokuapp.com/artist")
        .then((r) => {
            setArtistData(r.data);
            console.log(r.data);
        })
        .catch((e) => console.log(e.data));
    };

    
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

    useEffect(() => {
        getArtistData();
    },[]);

    return (
        <TableContainer>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Artist</StyledTableCell>
              <StyledTableCell>Date of Birth</StyledTableCell>
              <StyledTableCell>Songs</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {artistData.map((e) => (
              <StyledTableRow key={e._id}>
                <StyledTableCell>{e.name}</StyledTableCell>
                <StyledTableCell>{e.dob}</StyledTableCell>
                <StyledTableCell>{e?.song_name?.map((el) => (
                    <p>{el.name}</p>
                ))}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
}