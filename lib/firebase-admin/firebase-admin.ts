import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore, type Firestore } from "firebase-admin/firestore";

let adminDb: Firestore | undefined;

function getAdminCredentials() {
  const projectId = process.env.FIREBASE_ADMIN_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_ADMIN_CLIENT_EMAIL;
  const privateKey = process.env.FIREBASE_ADMIN_PRIVATE_KEY;

  if (!projectId || !clientEmail || !privateKey) {
    const missingVariables = [
      !projectId && "FIREBASE_ADMIN_PROJECT_ID",
      !clientEmail && "FIREBASE_ADMIN_CLIENT_EMAIL",
      !privateKey && "FIREBASE_ADMIN_PRIVATE_KEY",
    ].filter((variable): variable is string => Boolean(variable));

    throw new Error(
      `Firebase Admin credentials are missing. Set ${missingVariables.join(
        ", ",
      )} in the server environment before using Firebase Admin.`,
    );
  }

  return {
    projectId,
    clientEmail,
    privateKey: privateKey.replace(/\\n/g, "\n"),
  };
}

export function getAdminDb() {
  if (!adminDb) {
    const app =
      getApps()[0] ??
      initializeApp({
        credential: cert(getAdminCredentials()),
      });

    adminDb = getFirestore(app);
  }

  return adminDb;
}