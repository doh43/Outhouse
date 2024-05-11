import { NextResponse } from "next/server";
import { auth } from "@/app/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name, password } = body;

    // Log the request body for debugging
    console.log("Request body:", body);

    // Create user with Firebase Auth SDK
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Log user creation success
    console.log("User created:", user);

    // Update user profile with the display name
    await updateProfile(user, { displayName: name });

    // Log profile update success
    console.log("Profile updated for user:", user);

    // Return the user record created
    return NextResponse.json(user);
  } catch (error) {
    // Log the error
    console.error("Error creating user:", error);

    // Handle errors
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
