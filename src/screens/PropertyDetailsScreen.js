import React from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Card, Paragraph, Title } from 'react-native-paper';

const PropertyDetailsScreen = ({ route }) => {
  const { property } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: property.image }} style={styles.image} />
      <Card style={styles.card}>
        <Card.Content>
          <Title>{property.name}</Title>
          <Paragraph>{property.address}</Paragraph>
        </Card.Content>
      </Card>

      <View style={styles.section}>
        <Text style={styles.label}>Rent:</Text>
        <Text style={styles.value}>{property.rent} per month</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Current Tenants:</Text>
        <Text style={styles.value}>{property.tenants}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Maintenance Status:</Text>
        <Text style={styles.value}>{property.maintenanceStatus}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Edit Property" onPress={() => alert("Edit Property")} />
        <Button title="View Tenants" onPress={() => alert("View Tenants")} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    padding: 10,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  card: {
    marginBottom: 20,
  },
  section: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  value: {
    fontSize: 16,
    color: "#666",
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default PropertyDetailsScreen;
