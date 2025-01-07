import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Card } from 'react-native-paper';

const properties = [
  {
    id: "1",
    name: "MIT",
    address: "India, Maharashtra, Pune, Alandi",
    rent: "$1200",
    tenants: "Pratap Khandekar",
    maintenanceStatus: "Good",
    image: "https://via.placeholder.com/400x200", // Replace with real property image
  },
  {
    id: "2",
    name: "Taj Hotel ",
    address: "Moshi, Pune, Maharashtra",
    rent: "$900",
    tenants: "Akshata Bhimnale",
    maintenanceStatus: "Needs Repair",
    image: "https://via.placeholder.com/400x200", // Replace with real property image
  },
];

const PropertyListScreen = ({ navigation }) => {
  const renderProperty = ({ item }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("PropertyDetails", {
          property: item,
        })
      }
    >
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.address}>{item.address}</Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Property List</Text>
      <FlatList
        data={properties}
        keyExtractor={(item) => item.id}
        renderItem={renderProperty}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f8f8f8",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: "#ffffff",
    elevation: 3,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  address: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
});

export default PropertyListScreen;
