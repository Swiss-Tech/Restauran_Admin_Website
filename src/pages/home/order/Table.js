
import { Dropdown } from 'react-bootstrap';
import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

import Tooltip from '@mui/material/Tooltip';


import { visuallyHidden } from '@mui/utils';
import { AiFillDelete } from "react-icons/ai";

import { BsFilter } from "react-icons/bs";
import { styled } from '@mui/material/styles';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
   fontSize:'50px',
   color:'gray'
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
const StyledTableCell= styled(TableCell)(({ theme }) => ({
  '&:nth-of-type(odd)': {
   fontWeight:'700',
   fontSize:'15px',
   color:'gray'
  },
  '&:nth-of-type(even)': {
    fontWeight:'700',
    fontSize:'15px',
    color:'gray'
   },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
    
  },
}));

// data model

function createData(id, customer, menu, total, orderType,orderTime,status) {
  return {
    id,
    customer,
    menu,
    total,
    orderTime,
    orderType,
    status
  };
}

const rows = [
  createData(12,'woynshet',['Cupcake'], 305, '12:00', 'null', 'pending'),
  createData(13,'abebe',['pixa'], 305, '12:00', 'null', 'pending'),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function search(array, searchInput){

  const filteredData = array.filter((order) => {
   
    if (order === '') {
        return order;
    }
    else {
        return order.toLowerCase().includes(searchInput) || order.includes(searchInput);
    }
})
  return filteredData;
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

// header
const headCells = [
  {
    id:'row',
    numeric:false,
    disablePadding:false,
    label:'#'

  },
  {
    id: 'id',
    numeric: false,
    disablePadding: true,
    label: 'Order Id',
  },
  {
    id: 'customer',
    numeric: true,
    disablePadding: false,
    label: 'Customer',
  },
  {
    id: 'menu',
    numeric: true,
    disablePadding: false,
    label: 'Menu',
  },
  {
    id: 'total',
    numeric: true,
    disablePadding: false,
    label: 'Total Payment($)',
  },
  {
    id: 'orderType',
    numeric: true,
    disablePadding: false,
    label: 'Order Type',
  },
  {
    id: 'orderTime',
    numeric: true,
    disablePadding: false,
    label: 'Order Time',
  },
  {
    id: 'status',
    numeric: true,
    disablePadding: false,
    label: 'Status',
  },
  {
    id:'action',
    numeric:false,
    disablePadding:false,
    label:'Action'
  }
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <StyledTableRow  >
        {headCells.map((headCell) => (
          <StyledTableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </StyledTableCell>
        ))}
        
      </StyledTableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Nutrition
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
        
            <AiFillDelete />
       
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
     
            <BsFilter />
        
        </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [inputText, setInputText] = React.useState("")

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

 

  const isSelected = (name) => selected.indexOf(name) !== -1;

 
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: '100%' }}>
      
      <div class="d-flex justify-content-between align-items-center mt-lg-0 mt-3 ml-lg-3 ml-0">
      <div className="search">
                <form class="form-inline">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>{
                 setInputText(e.target.value);
                }}/>
                 </form>
              </div>  
              <Tooltip title="Filter list" onClick={()=>{
                
              }}>
     
            <BsFilter />
        
        </Tooltip>

       </div>
           


        <TableContainer>
          <Table
        
            
          
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
           
              {  inputText ? <div>{inputText}</div>  : stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.name)}
                      
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >

                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                       
                      >
                        {index+1}
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.id}
                      </TableCell>
                      <TableCell align="right">{row.customer}</TableCell>
                      <TableCell align="right">{row.menu.length}</TableCell>
                      <TableCell align="right">{row.total}</TableCell>
                      <TableCell align="right">{row.orderType}</TableCell>
                      <TableCell align="right">{row.orderTime}</TableCell>
                      <TableCell align="right">{row.status}</TableCell>
                      <TableCell >
        <Dropdown>
       <Dropdown.Toggle variant="success" id="dropdown-basic">
         Dropdown Button
       </Dropdown.Toggle>

       <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>         <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </Dropdown.Menu>
   </Dropdown>
                        {/* <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        /> */}
                      </TableCell>
                    </TableRow>
                  );
                })} 
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      
      
    </Box>
  );
}


