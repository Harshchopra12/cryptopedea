import { cert, getApps, initializeApp } from "firebase-admin/app";
import type { ServiceAccount } from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";

import serviceAccount from "../../keys/serviceAccountKey.json";

const app =
  getApps().length > 0
    ? getApps()[0]
    : initializeApp({
        credential: cert(serviceAccount as ServiceAccount),
      });

export const adminDb = getFirestore(app);