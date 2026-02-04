import { ScrollView, View, Text, TextInput, StyleSheet } from "react-native";
import { useCallback, useState } from "react";
import { Colors } from "../../constants/colors";
import { Place } from "../../models/place";

import Button from "../../component/UI/Button";
import ImagePicker from "../../component/Places/ImagePicker";
import LocationPicker from "./LocationPicker";

function PlaceForm({ onCreatePlace }) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [pickedLocation, setPickedLocation] = useState(null);

  function changeTitleHandler(enteredText) {
    setEnteredTitle(enteredText || "");
  }

  function takeImageHandler(imageUri) {
    setSelectedImage(imageUri);
  }

  const pickLocationHandler = useCallback((location) => {
    setPickedLocation(location);
  }, []);

  function savePlaceHandler() {
    // Validasi dan persiapan data
    const title = String(enteredTitle || "").trim();

    if (!title || title.length === 0) {
      alert("⚠️ Judul tidak boleh kosong!");
      return;
    }

    if (!selectedImage || selectedImage.length === 0) {
      alert("⚠️ Silakan pilih gambar terlebih dahulu!");
      return;
    }

    if (!pickedLocation) {
      alert("⚠️ Silakan tentukan lokasi terlebih dahulu!");
      return;
    }

    if (!pickedLocation.lat || !pickedLocation.lng) {
      alert("⚠️ Koordinat lokasi tidak lengkap!");
      return;
    }

    if (!pickedLocation.address) {
      alert("⚠️ Alamat lokasi tidak ditemukan!");
      return;
    }

    // Buat place object dengan data yang sudah divalidasi
    const placeData = new Place(title, selectedImage, pickedLocation);

    console.log("Sending place to save:", placeData);
    onCreatePlace(placeData);
  }

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={changeTitleHandler}
          value={enteredTitle}
          placeholder="Enter place title"
        />
      </View>
      <ImagePicker onTakeImage={takeImageHandler} />
      <LocationPicker onPickLocation={pickLocationHandler} />
      <Button onPress={savePlaceHandler}>Add Places</Button>
    </ScrollView>
  );
}
export default PlaceForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 4,
    color: Colors.primary500,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
  },
});
