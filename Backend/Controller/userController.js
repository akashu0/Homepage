import express from "express"
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut, updateProfile
} from "firebase/auth";
import { auth } from "../Config/firebaseAuth.js"
import { HomeDetails, HomeItems, MultiFeatureDetails } from '../Model/HomepageDB.js'

export const getDetails = async (req, res) => {
  try {
    const details = await HomeItems.find()
    console.log(details)
    res.status(200).json(details)
  } catch (error) {
    console.log(error);
  }
}


export const ProductDetails = async (req, res) => {
  try {
    res.status(200).json(MultiFeatureDetails)
  } catch (error) {
    console.log(error);
  }
}

export const Login = async (req, res) => {

  try {
    const { email, password } = req.body

    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        res.status(200).json(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        res.status(errorCode).json(errorMessage)

      });
  } catch (error) {
    console.log(error.message);
  }
}

export const Signup = async (req, res) => {

  try {
    console.log("Req hit");
    const { name, email, password } = req.body
    console.log(req.body);

    await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, { displayName: name })
        }).then((user) => {
          res.status(200).json({ status: "success", user })
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          res.status(errorCode).json({ status: "errorMessage" })
        });

  } catch (error) {
    console.log(error.message);
  }
}


export const checkAuth = async (req, res) => {

  try {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log(uid);
        res.status(200).json({ Status: "Session Exists" })
      } else {
        res.status(204).json({ status: "User Signed out" })
      }
    });
  } catch (error) {

  }

}


export const logout = async (req, res) => {

  try {
    signOut(auth).then(() => {
      res.status(200).json({ status: "successful" })
    }).catch((error) => {
      console.log(error.message)
      res.status(500).json({ status: error.message });
    });
  } catch (error) {
    console.log(error);
  }
}