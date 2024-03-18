import Dashbored from './Dashbored';
import { makeStyles } from '@material-ui/core/styles';
import React, { useRef, useEffect ,useState } from 'react';
import axios from 'axios';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Typography } from '@material-ui/core';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
 
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
  dashboard: {
    flex: 1,
    marginLeft: theme.spacing(2),
  },
  
}));

const Sidebar = () => {
  const classes = useStyles();
  const [showForm, setShowForm] = useState(false);
  const [editform, seteditform] = useState(false);
  const [ownerform, setownerform] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isDashboardEnabled, setDashboardEnabled] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);
const [imageUrl, setImageUrl] = useState('');
  const handleFileUpload = (e) => {
    setSelectedFile(e.target.files[0]);
  }

  const [data, setData] = useState([]);
  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setDashboardEnabled(false);
  };
  const renderEventContent = () => {
    switch (selectedEvent) {
      case 'addVenue':
        return <div>
           {/* Render your form here */}
           <form className={classes.form} encType="multipart/form-data" onSubmit={handleSubmit}  style={{ width: "100%" }}>
               <Typography variant="h6" gutterBottom>
                 <center><b>Add Venue Details</b></center>
               </Typography>
               <TextField
                 className={classes.textField}
                 label="Venue ID"
                 name="id"
                 value={venueDetails.id}
                 onChange={handleInputChange}
                 required
               />
               <TextField
                 className={classes.textField}
                 label="Venue Owner ID"
                 name="ownername"
                 type="text"
                 value={venueDetails.ownername}
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
                 label="Menu"
                 name="menu"
                 value={venueDetails.menu}
                 onChange={handleInputChange}
                 required
               />
               <TextField
                 className={classes.textField}
                 label="Expected Guests"
                 name="guest"
                 value={venueDetails.guest}
                 onChange={handleInputChange}
                 required
               />
               <TextField
                 className={classes.textField}
                 label="theme"
                 name="theme"
                 value={venueDetails.theme}
                 onChange={handleInputChange}
                 required
               />
               <input
  className={classes.textField}
  type="file"
  name="image"
  accept="image/*"
  onChange={handleInputChange}
  required
/>
                <TextField
                 className={classes.textField}
                 label="Latitude"
                 name="lat"
                 value={venueDetails.lat}
                 onChange={handleInputChange}
                 required
               />
                <TextField
                 className={classes.textField}
                 label="Longitude"
                 name="long"
                 value={venueDetails.long}
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
             {/* Success message */}
      {showSuccess && (
        <div className="dialog-container" style={{ background: '#2ecc71', color: '#fff', padding: '10px', textAlign: 'center', position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '999' }}>
          <p>User created successfully!</p>
        </div>
      )}
           </div>;
      case 'editVenue':
        return <div>
        {/* Render your form here */}
        <table className={classes.table} border="1">
          <thead className={classes.tableHeader}>
            <tr>
            <th className={classes.tableHeaderCell}>ID</th>
              <th className={classes.tableHeaderCell}>Name</th>
              <th className={classes.tableHeaderCell}>Venue ID</th>
              <th className={classes.tableHeaderCell}>Contant Number</th>
              <th className={classes.tableHeaderCell}>Email</th>
              <th className={classes.tableHeaderCell}>Address</th>
              <th className={classes.tableHeaderCell}>Deatils</th>
              <th className={classes.tableHeaderCell}>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map(user => (
              <tr key={user.id}>
                <td className={classes.tableCell}>{user.id}</td>
                <td className={classes.tableCell}>{user.name}</td>
                <td className={classes.tableCell}>{user.Venueid}</td>
                <td className={classes.tableCell}>{user.phonenumber}</td>
                <td className={classes.tableCell}>{user.email}</td>
                <td className={classes.tableCell}>{user.address}</td>
                <td className={classes.tableCell}>{user.deatils}</td>
              
                <td className={classes.tableCell}>
                  <button className={classes.deleteButton}>Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>;
      case 'pendingEvents':
        return <div></div>;
      case 'Owneradd':
        return <div>
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
        </div>;
      case 'event2':
        return <div></div>;
      // Add more cases for other events
  
      default:
        return null;
    }
  };
  const handleVenueClick = () => {
    setShowForm(true);
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const fileName = file.name; // Extract the file name
    setVenueDetails((prevDetails) => ({
      ...prevDetails,
      image: file,
     
    }));
  };
  
  const [venueDetails, setVenueDetails] = useState({
    name: '',
    type:'',
    location: '',
    parking: '',
    price: '',
    ownername: '',
    guest: '',
    theme: '',
    menu: '',
    id:'',
    availability: '',
    city:'',
    lat:'',
    long:'',
    

  });
  const [venueImage, setVenueImage] = useState(null);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (event.target.name === 'image') {
      setVenueImage(event.target.files[0]);
    }
    setVenueDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };
  const [showSuccess, setShowSuccess] = useState(false);
  const handleSubmit = async (event) =>{
    event.preventDefault();
    const formData = new FormData();
    formData.append('image', venueImage);
    formData.append('id', venueDetails.id);
    formData.append('ownername', venueDetails.ownername);
    formData.append('name', venueDetails.name);
    formData.append('type', venueDetails.type);
    formData.append('city', venueDetails.city);
    formData.append('location', venueDetails.location);
    formData.append('parking', venueDetails.parking);
    formData.append('price', venueDetails.price);
    formData.append('menu', venueDetails.menu);
    formData.append('guest', venueDetails.guest);
    formData.append('theme', venueDetails.theme);
    formData.append('lat', venueDetails.lat);
    formData.append('long', venueDetails.long);
    formData.append('availability', venueDetails.availability);
    const response=await axios.post('http://127.0.0.1:8000/api/venueDetails-form',formData)
    .then((response) => {
      console.log(response);
    })
    
    .catch((error) => {
      console.log(error);
    });
    setShowSuccess(true);
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
      city:'',
      lat:'',
    long:'',
    image:''
    });
  };
  const [venueownerDetails, setVenueownerDetails] = useState({
    name: '',
    address: '',
    email: '',
    deatils: '',
   
    phonenumber: '',
    ownerid:'',
    Venueid:''
  });
  const ownerInputChange = (event) => {
    const { name, value } = event.target;
    setVenueownerDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/fetch-venueownerDetails')
      .then(response => setData(response.data))
      .catch(error => console.log(error));console.log(data);
  }, []);

  const  ownerdeatils= async (event) =>{
    event.preventDefault();
    const response=await axios.post('http://127.0.0.1:8000/api/venueownerDetails-form',venueownerDetails)
    .then((response ) => {
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
  
  const updateform = () => {
    seteditform(true);
  };
  const venueowner = () => {
   
    setownerform(true);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 col-lg-2 sidebar-offcanvas pl-0" id="sidebar" role="navigation" style={{ backgroundColor: "#e9ecef" }}>
          <ul className="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3">
            <li className="nav-item mb-2 mt-3">
              <a className="nav-link text-secondary" href="#"><h5>M. Zahid</h5></a>
            </li>
            <li className="nav-item mb-2 ">
              <a className="nav-link text-secondary" href="#" >
                <i className="fas fa-user font-weight-bold"></i> <span className="ml-3"  onClick={() => handleEventClick('Owneradd')}>Add VenueOwners</span>
              </a>
            </li>
            <li className="nav-item mb-2">
              <a className="nav-link text-secondary" href="#submenu1" data-toggle="collapse" data-target="#submenu1">
                <i className="far fa-clock fa-0x"></i> <span className="ml-3">Pending Events</span>
              </a>
              <div id="submenu1" className="collapse">
                <ul className="nav flex-column pl-3">
                  <li className="nav-item">
                    <a className="nav-link text-secondary" href="#">Event 1</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-secondary" href="#">Event 2</a>
                  </li>
                  {/* Add more pending events */}
                </ul>
              </div>
            </li>
            <li className="nav-item mb-2">
              <a className="nav-link text-secondary" href="#"  onClick={() => handleEventClick('editVenue')}>
                <i className="far fa-chart-bar font-weight-bold"></i> <span className="ml-3">Show Venueowner</span>
              </a>
            </li>
            <li className="nav-item mb-2">
              <a className="nav-link text-secondary" href="#">
                <i className="fas fa-check-circle fa-0x font-weight-bold"></i> <span className="ml-3" style={{ display: 'inline' }}>
      Events Completed
    </span></a>
            </li>
            <li className="nav-item mb-2">
              <a className="nav-link text-secondary" href="#" onClick={() => handleEventClick('addVenue')}>
                <i className="fas fa-building font-weight-bold"></i><span className="ml-3">Add Venue</span>
              </a>
            </li>
            
            <li className="nav-item mb-2">
              <a className="nav-link text-secondary" href="#" onClick={() => handleEventClick('BlockVenue')}>
                <i className="fas fa-tablet-alt font-weight-bold"></i><span className="ml-3">Block Venue</span>
              </a>
            </li>
            <li className="nav-item mb-2">
              <a className="nav-link text-secondary" href="#"  onClick={() => handleEventClick('Cancel')}>
                <i className="fas fa-times "></i><span className="ml-3">Cancel Reservation</span>
              </a>
            </li>
          </ul>
        </div>
        
        {isDashboardEnabled && <Dashbored />}
        <div >
          {/* Render the content based on the selected event */}
          {renderEventContent()}
        </div>
  </div> 
   </div>
);
};
  export default Sidebar;