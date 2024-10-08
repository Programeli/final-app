import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons, FontAwesome } from 'react-native-vector-icons';

import Home from './Home';
import SubmitReport from './SubmitReport';
import RepairRequests from './RepairRequests';
import MaintenanceAssignment from './MaintenanceAssignment';
import ReportDetails from './ReportDetails';
import ImageModal from './ImageModal';
import CustomDrawerButton from './CustomDrawerButton'; // Import the custom drawer button

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <CustomDrawerButton
          {...props}
        />
      )}
    >
      <Drawer.Screen 
        name="Home" 
        component={Home} 
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen 
        name="Submit Report" 
        component={SubmitReport} 
        options={{
          drawerIcon: ({ color, size }) => (
            <FontAwesome name="edit" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen 
        name="Repair Requests" 
        component={RepairRequests} 
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="build" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen 
        name="MaintenanceAssignment" 
        component={MaintenanceAssignment}
        options={{ drawerItemStyle: { display: 'none' } }} // Hide from drawer menu
      />
      <Drawer.Screen 
        name="ReportDetails" 
        component={ReportDetails}
        options={{ drawerItemStyle: { display: 'none' } }} // Hide from drawer menu
      />
      <Drawer.Screen 
        name="ImageModal" 
        component={ImageModal}
        options={{ drawerItemStyle: { display: 'none' } }} // Hide from drawer menu
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
