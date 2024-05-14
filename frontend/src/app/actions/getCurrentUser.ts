import { getServerSession } from "next-auth/next";
import { authOptions } from "../../../pages/api/auth/[...nextauth]";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

export async function getSession() {
  return await getServerSession(authOptions);
}

const auth = getAuth();

export default async function getCurrentUser() {
  try {
    // Get the session from NextAuth
    const session = await getSession();
    if (!session?.user?.email) {
      return null;
    }

    // Get the current user from Firebase Auth
    const userPromise = new Promise((resolve, reject) => {
      const unsubscribe = onAuthStateChanged(
        auth,
        (user) => {
          unsubscribe(); // Unsubscribe after receiving the first result
          if (user) {
            resolve(user);
          } else {
            resolve(null);
          }
        },
        reject
      );
    });

    const user = await userPromise;
    if (!user) {
      return null;
    }

    // Query the Firestore database for user data
    const usersQuery = query(collection(db, "users"));
    const querySnapshot = await getDocs(usersQuery);
    const usersData = querySnapshot.docs.map((doc) => doc.data());

    // Return an object that combines information from NextAuth and Firestore
    return {
      email: session.user.email, // Email from NextAuth session
      name: session.user.name, // Name from NextAuth session
      //   firebaseUser: user.toJSON(), // User details from Firebase Auth
      firestoreUsers: usersData, // Users data from Firestore
    };
  } catch (error) {
    console.error("Failed to get current user:", error);
    return null;
  }
}
