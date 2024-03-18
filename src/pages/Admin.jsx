import React, { useState, useRef, useEffect } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import HomeIcon from '@material-ui/icons/Home';
import adminphoto from "../images/admin.jpg";
import PersonIcon from '@material-ui/icons/Person';
import CancelIcon from '@material-ui/icons/Cancel';
import { TextField } from '@material-ui/core';
//import background from "../images/Hall2.jpg"
import axios from 'axios';
import { async } from 'q';
import PieChart from './Piechart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie, faUsers, faFileAlt } from '@fortawesome/free-solid-svg-icons';
const drawerWidth = 250;
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
  },
  
  drawerPaper: {
    width: drawerWidth,
  },
  drawerButton: {
    width: '20%',
    borderRadius: 0, // Set the border radius to 0 for a square shape
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2),
    backgroundColor: 'black', // Set the background color of the header to black
  },
  headerText: {
    color: 'white', // Set the color of the header text to white
    marginLeft: theme.spacing(2),
  },
  drawerImage: {
    width: '80px',
    height: '80px',
    marginRight: theme.spacing(2),
    borderRadius: '50%',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '400px',
    margin: '0 auto',
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
  table: {
    borderCollapse: 'collapse',
    width: '100%',
    marginTop: theme.spacing(2),
  },

  tableHeader: {
    background: 'black',
  },

  tableHeaderCell: {
    color: 'white',
    padding: theme.spacing(2),
  },

  tableRow: {
    '&:nth-child(even)': {
      background: '#f2f2f2',
    },
  },

  tableCell: {
    border: '1px solid black',
    padding: theme.spacing(2),
  },

  deleteButton: {
    backgroundColor: 'Blue',
    color: 'white',
    border: 'none',
    padding: theme.spacing(1),
    cursor: 'pointer',
  },
  
}));

const AdminPage = () => {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  const drawerContainerRef = useRef(null);
  const [showForm, setShowForm] = useState(false);
  const [editform, seteditform] = useState(false);
  const [ownerform, setownerform] = useState(false);
  const [data, setData] = useState([]);
  const [venueDetails, setVenueDetails] = useState({
    name: '',
    type:'',
    location: '',
    parking: '',
    price: '',
    ownername: '',
    guest: '',
    theme: '',
    portion: '',
    id:'',
    availability: '',
    city:''
  });
  const [venueownerDetails, setVenueownerDetails] = useState({
    name: '',
    address: '',
    email: '',
    deatils: '',
   
    phonenumber: '',
    ownerid:'',
    Venueid:''
  });
  const [selectedItem, setSelectedItem] = useState(null); // New state variable to track the selected item

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/fetch-updatevenue')
      .then(response => setData(response.data))
      .catch(error => console.log(error));
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setVenueDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };
  const ownerInputChange = (event) => {
    const { name, value } = event.target;
    setVenueownerDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };
  const  ownerdeatils= async (event) =>{
    event.preventDefault();
    const response=await axios.post('http://127.0.0.1:8000/api/venueownerDetails-form',venueownerDetails)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
    console.log(venueDetails);
    // Reset the form after submission
    setVenueownerDetails({
      ownerid:'',
      name: '',
    address: '',
    email: '',
    deatils: '',
    phonenumber: '',
    Venueid:'',
    });
  };
  const handleSubmit = async (event) =>{
    event.preventDefault();
    const response=await axios.post('http://127.0.0.1:8000/api/venueDetails-form',venueDetails)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
    console.log(venueDetails);
    // Reset the form after submission
    setVenueDetails({
      name: '',
      location: '',
      parking: '',
      price: '',
      ownername: '',
      guest: '',
      theme: '',
      portion: '',
      id:'',
      availability: '',
      city:''
    });
  };

  const handleShowForm = () => {
    setSelectedItem(null); // Clear the selected item
    setShowForm(true);
  };

  const updateform = () => {
    setSelectedItem(null); // Clear the selected item
    seteditform(true);
  };
  const venueowner = () => {
    setSelectedItem(null); // Clear the selected item
    setownerform(true);
  };

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (drawerContainerRef.current && !drawerContainerRef.current.contains(event.target)) {
        setOpenDrawer(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setShowForm(false);
    seteditform(false);
  };

  return (
    
    <div ref={drawerContainerRef} style={{ marginBottom: '550px', }} >
      <center><h1><b>Welcome to the Admin Panel</b></h1></center>
     
      <IconButton onClick={handleDrawerOpen} className={classes.drawerButton}>
        <MenuIcon />
      </IconButton>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={openDrawer}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <img src={adminphoto} alt="Avatar" className={classes.drawerImage} />
          <div>
            <Typography variant="subtitle1" className={classes.headerText}>
              Admin
            </Typography>
            <Typography variant="body2" className={classes.headerText}>
              Zahid@gmail.com
            </Typography>
          </div>
        </div>

        <List>
          <ListItem button onClick={() => handleItemClick('pending')}>
            <ListItemIcon>
              <HourglassEmptyIcon />
            </ListItemIcon>
            <ListItemText primary="Pending Events" />
          </ListItem>
          <ListItem button onClick={() => handleItemClick('completed')}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Events Completed" />
          </ListItem>
          <ListItem button onClick={handleShowForm}>
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <ListItemText primary="Add Venue" />
          </ListItem>
          <ListItem button onClick={() => handleItemClick('delete')}>
            <ListItemIcon>
              <DeleteIcon />
            </ListItemIcon>
            <ListItemText primary="Delete Venue" />
          </ListItem>
          <ListItem button onClick={updateform}>
            <ListItemIcon>
              <EditIcon />
            </ListItemIcon>
            <ListItemText primary="Edit Venues" />
          </ListItem>
           <ListItem button onClick={venueowner}>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Venues Owner" />
          </ListItem>
          
           <ListItem button onClick={venueowner}>
            <ListItemIcon>
              <CancelIcon />
            </ListItemIcon>
            <ListItemText primary="Cancel Booking" />
          </ListItem>
         
          
        </List>
      
      </Drawer>
      
      <div className="icon-container" style={{ display: 'flex', justifyContent: "space-around" }}>
  <div className="icon-card">
    <div className="box" style={{ backgroundColor: '#f0f0f0', border: '1px solid #ccc', padding: '10px' }}>
      <FontAwesomeIcon icon={faChartPie} className="icon" size="5x" />
      <h2>Pie Chart</h2>
    </div>
  </div>

  <div className="icon-card">
    <div className="box" style={{ backgroundColor: '#eaeaea', border: '1px solid #aaa', padding: '15px' }}>
      <FontAwesomeIcon icon={faUsers} className="icon" size="5x" />
      <h2>Users</h2>
    </div>
  </div>

  <div className="icon-card">
    <div className="box" style={{ backgroundColor: '#f5f5f5', border: '1px solid #ddd', padding: '12px' }}>
      <FontAwesomeIcon icon={faFileAlt} className="icon" size="5x" />
      <h2>Files</h2>
    </div>
  </div>
</div>




      <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>
        <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>
        <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>
        <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>
    
        
      {showForm && !selectedItem && (
        <div>
          {/* Render your form here */}
          <form className={classes.form} onSubmit={handleSubmit} style={{ width: "80%" }}>
            <Typography variant="h6" gutterBottom>
              <center><b>Add Venue Details</b></center>
            </Typography>
            <TextField
              className={classes.textField}
              label="Venue ID"
              name="id"
              value={venueDetails.price}
              onChange={handleInputChange}
              required
            />
            <TextField
              className={classes.textField}
              label="Venue Owner Name"
              name="ownername"
              value={venueDetails.price}
              onChange={handleInputChange}
              required
            />
            <TextField
              className={classes.textField}
              label="Venue Name"
              name="name"
              value={venueDetails.name}
              onChange={handleInputChange}
              required
            />
            <TextField
              className={classes.textField}
              label="Venue Type"
              name="type"
              value={venueDetails.type}
              onChange={handleInputChange}
              required
            />
             <TextField
              className={classes.textField}
              label="Venue city"
              name="city"
              value={venueDetails.city}
              onChange={handleInputChange}
              required
            />
            <TextField
              className={classes.textField}
              label="Location"
              name="location"
              value={venueDetails.location}
              onChange={handleInputChange}
              required
            />
            <TextField
              className={classes.textField}
              label="Parking Details"
              name="parking"
              value={venueDetails.parking}
              onChange={handleInputChange}
            />
            <TextField
              className={classes.textField}
              label="Price per head"
              name="price"
              value={venueDetails.price}
              onChange={handleInputChange}
              required
            />
            <TextField
              className={classes.textField}
              label="portion"
              name="portion"
              value={venueDetails.price}
              onChange={handleInputChange}
              required
            />
            <TextField
              className={classes.textField}
              label="Expected Guests"
              name="guest"
              value={venueDetails.price}
              onChange={handleInputChange}
              required
            />
            <TextField
              className={classes.textField}
              label="theme"
              name="theme"
              value={venueDetails.price}
              onChange={handleInputChange}
              required
            />
              <TextField
              className={classes.textField}
              label="________________________Availability Time"
              name="availability"
              type="date"
              value={venueDetails.availability}
              onChange={handleInputChange}
              required
            />
              
            <button
              className={classes.button}
              variant="contained"
              color="primary"
              type="submit"
              borderRadius="220px"
            >
              Add Venue
            </button>
          </form>
        </div>
      )}
       {ownerform && !selectedItem && (
        <div>
          {/* Render your form here */}
          <form className={classes.form} onSubmit={ownerdeatils} style={{ width: "80%" }}>
            <Typography variant="h6" gutterBottom>
              <center><b>Add Venues Owner Details</b></center>
            </Typography>
            <TextField
              className={classes.textField}
              label="Venue Owner ID"
              name="ownerid"
              type="number"
              value={venueownerDetails.ownerid}
              onChange={ownerInputChange}
              required
            />
              <TextField
              className={classes.textField}
              label="Venue ID"
              name="Venueid"
              type="number"
              value={venueownerDetails.Venueid}
              onChange={ownerInputChange}
            />
            <TextField
              className={classes.textField}
              label="Venue Owner Name"
              name="name"
              type="text"
              value={venueownerDetails.name}
              onChange={ownerInputChange}
              required
            />
            <TextField
              className={classes.textField}
              label="Phone Number#"
              name="phonenumber"
              type="number"
              value={venueownerDetails.phonenumber}
              onChange={ownerInputChange}
              required
            />
            <TextField
              className={classes.textField}
              label="Email"
              name="email"
              type="email"
              value={venueownerDetails.email}
              onChange={ownerInputChange}
              required
            />
            <TextField
              className={classes.textField}
              label="Address"
              name="address"
              type="text"
              value={venueownerDetails.address}
              onChange={ownerInputChange}
              required
            />
            <TextField
              className={classes.textField}
              label="Details"
              name="deatils"
              type="text"
              value={venueownerDetails.deatils}
              onChange={ownerInputChange}
            />
          
           
            <button
              className={classes.button}
              variant="contained"
              color="primary"
              type="submit"
              borderRadius="220px"
            >
              Add Venue Owner
            </button>
          </form>
        </div>
      )}

      {editform && !selectedItem && (
        <div>
          {/* Render your form here */}
          <table className={classes.table} border="1">
            <thead className={classes.tableHeader}>
              <tr>
              <th className={classes.tableHeaderCell}>ID</th>
                <th className={classes.tableHeaderCell}>Name</th>
                <th className={classes.tableHeaderCell}>Price Per Head</th>
                <th className={classes.tableHeaderCell}>Expected Guests</th>
                <th className={classes.tableHeaderCell}>Portion</th>
                <th className={classes.tableHeaderCell}>Parking</th>
                <th className={classes.tableHeaderCell}>Theme</th>
                <th className={classes.tableHeaderCell}>Location</th>
                <th className={classes.tableHeaderCell}>Owner Name</th>
                <th className={classes.tableHeaderCell}></th>
              </tr>
            </thead>
            <tbody>
              {data.map(user => (
                <tr key={user.id}>
                  <td className={classes.tableCell}>{user.id}</td>
                  <td className={classes.tableCell}>{user.name}</td>
                  <td className={classes.tableCell}>{user.price}</td>
                  <td className={classes.tableCell}>{user.guest}</td>
                  <td className={classes.tableCell}>{user.portion}</td>
                  <td className={classes.tableCell}>{user.parking}</td>
                  <td className={classes.tableCell}>{user.theme}</td>
                  <td className={classes.tableCell}>{user.location}</td>
                  <td className={classes.tableCell}>{user.ownername}</td>
                  <td className={classes.tableCell}>
                    <button className={classes.deleteButton}>Update</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
    
  );
};

export default AdminPage;
