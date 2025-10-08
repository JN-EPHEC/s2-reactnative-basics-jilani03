import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import ProfileCard from "../../components/ProfileCard";

const USERS_DATA = [
  { id: "1", nom: "Alice Martin", jobTitle: "React Native Developer", imageUrl: "https://picsum.photos/200/300" },
  { id: "2", nom: "Benjamin Dubois", jobTitle: "UX Designer", imageUrl: "https://picsum.photos/200/301" },
  { id: "3", nom: "Chloé Garcia", jobTitle: "Project Manager", imageUrl: "https://picsum.photos/200/302" },
  { id: "4", nom: "David Petit", jobTitle: "Web Developer", imageUrl: "https://picsum.photos/200/303" },
  { id: "5", nom: "Émilie Rousseau", jobTitle: "Software Engineer", imageUrl: "https://picsum.photos/200/304" },
];

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        {USERS_DATA.map((user) => (
          <ProfileCard
            key={user.id}
            name={user.nom}
            jobTitle={user.jobTitle}
            imageUrl={user.imageUrl}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  item: {
    backgroundColor: "#ffffff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  nom: {
    fontSize: 18,
    fontWeight: "bold",
  },
  email: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
});
