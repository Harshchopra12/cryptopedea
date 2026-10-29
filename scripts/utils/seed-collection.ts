import { getAdminDb } from "@/lib/firebase-admin/firebase-admin";
import { WriteBatch } from "firebase-admin/firestore";

export async function seedCollection<
  T extends { id: string }
>(
  collectionName: string,
  documents: T[],
) {
  const adminDb = getAdminDb();
  const batch: WriteBatch = adminDb.batch();

  for (const document of documents) {
    const { id, ...data } = document;

    const docRef = adminDb
      .collection(collectionName)
      .doc(id);

    batch.set(
      docRef,
      data,
      {
        merge: true,
      },
    );
  }

  await batch.commit();

  console.log(
    `✅ Seeded ${documents.length} documents into "${collectionName}".`,
  );
}