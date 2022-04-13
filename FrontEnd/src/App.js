import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AdminHome from './components/AdminHome';
import DeleteCustomer from './components/DeleteCustomer';
import DeleteShowroom from './components/DeleteShowroom';
import Login from './components/Login';
import MainMenu from './components/MainMenu';
import ShowroomHome from './components/ShowroomHome';
import ShowroomRegister from './components/ShowroomRegister';
import ShowroomUpdate from './components/ShowroomUpdate';
import UserHome from './components/UserHome';
import UserRegister from './components/UserRegister';
import Error from './components/error';
import UserUpdate from './components/UserUpdate';
import ForgotPassword from './components/ForgotPassword';
import AddBike from './components/AddBike';
import UserChangePassword from './components/UserChangePassword';
import ShowroomChangePassword from './components/ShowroomChangePassword';
import SearchBike from './components/SearchBike';
import UserSearchBike from './components/UserSearchBike';
import CompareBike from './components/CompareBike';
import UserComparebike from './components/UserCompareBike';
import ViewMore from './components/ViewMore';
import BookBike from './components/BookBike';
import UserViewMore from './components/UserViewMore';
import ViewBookings from './components/ViewBookings';
import BookingStatus from './components/BookingStatus';
import EditBook from './components/EditBook';
import ViewCancelledBooking from './components/ViewCancelledBooking';
import GenerateReport from './components/GenerateReport';
//import AdminRegister from './components/AdminRegister';

function App() {
  return (
    <div className='container-fluid'>
      <Routes>
        <Route path="/" element={<MainMenu />} />
      </Routes>
      <div style={{ backgroundColor: "antiquewhite", width: '100%', height: '100%' }}>
        <Routes>
          <Route path="/reportGenerate" element={<GenerateReport />} />
          <Route path="/searchbike" element={<SearchBike />} />
          <Route path="/CompareBike" element={<CompareBike />} />
          <Route path="/bookbike" element={<BookBike />} />
          <Route path="/ViewMore" element={<ViewMore />} />
          <Route path="/login" element={<Login />} />
          <Route path="/UserHome" element={<UserHome />} />
          <Route path="/AdminHome" element={<AdminHome />} />
          <Route path="/ShowroomHome" element={<ShowroomHome />} />
          <Route path="/ShowroomRegister" element={<ShowroomRegister />} />
          <Route path="/updatestatus" element={<BookingStatus />} />
          <Route path="/EditBook" element={<EditBook />} />
          <Route path="/" element={<MainMenu />} />
          <Route path="/UserRegister" element={<UserRegister />} />
          {/*<Route path="/AdminRegister" element={<AdminRegister />} />*/}
          <Route path="/AddBike" element={<AddBike />} />
          <Route path="/DeleteCustomer" element={<DeleteCustomer />} />
          <Route path="/DeleteShowroom" element={<DeleteShowroom />} />
          <Route path="/ShowroomUpdate" element={<ShowroomUpdate />} />
          <Route path="/UserUpdate" element={<UserUpdate />} />
          <Route path="/UserSearchBike" element={<UserSearchBike />} />
          <Route path="/UserViewMore" element={<UserViewMore />} />
          <Route path="/Viewbookings" element={<ViewBookings />} />
          <Route path="/Viewcanbookings" element={<ViewCancelledBooking />} />
          <Route path="/usercomparebike" element={<UserComparebike />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/UserChangePassword" element={<UserChangePassword />} />
          <Route path="/ShowroomChangePassword" element={<ShowroomChangePassword />} />
        </Routes>
      </div>
    </div>
  )
}
export default App;