import {
  arrayUnion,
  deleteDoc,
  doc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../firebase/firebase";
import uniqid from "uniqid";
import { deleteObject, ref } from "firebase/storage";

export const deleteCourse = async (courseID) => {
  try {
    await deleteDoc(doc(db, "properties", courseID));
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
export const appendImage = async (URL, genratedID) => {
  const imageRef = doc(db, "images", genratedID);
  await setDoc(imageRef, {
    url: URL,
    id: genratedID,
    selected: false,
  });
};
