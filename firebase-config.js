/* ============================================================
   BIGRIDZ STUDIO: Firebase settings (used by index.html + admin.html)
   Firebase console > Project settings > Your apps > Web app > Config
   ============================================================ */
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyDOBrULo2yKumhe0ZdmFPUI1_0R5d3bn4Y",
  authDomain: "portfolio-922db.firebaseapp.com",
  projectId: "portfolio-922db",
  storageBucket: "portfolio-922db.firebasestorage.app",
  messagingSenderId: "692351276369",
  appId: "1:692351276369:web:dc61d99c65190abc276f70",
  measurementId: "G-1YZ56EN13P"
};

/* Image hosting WITHOUT a billing card (Cloudinary free plan).
   Leave empty to use Firebase Storage instead. */
window.CLOUDINARY = {
  cloudName: "pmbr3mwx",
  uploadPreset: "Bigridz_work"   // must match your UNSIGNED preset name exactly
};

/* Admin accounts: only these emails can open admin.html and make changes.
   Create each one in Firebase > Authentication > Users. */
window.ADMIN_EMAILS = [
  "okunolaridwan284@gmail.com"
  // , "adekunle01-email@example.com"   <- add the email for @Adekunle01 here
];

/* Optional username login: type @Adekunle01 instead of the email.
   Put the matching email from the list above. */
window.ADMIN_USERNAMES = {
  // "adekunle01": "adekunle01-email@example.com"
};

/* ------------------------------------------------------------
   SECURITY RULES (paste in the Firebase console)

   Firestore > Rules:
   rules_version = '2';
   service cloud.firestore {
     match /databases/{db}/documents {
       match /{doc=**} {
         allow read: if true;
         allow write: if request.auth != null
           && request.auth.token.email in ["okunolaridwan284@gmail.com"];
       }
     }
   }

   Storage > Rules:
   rules_version = '2';
   service firebase.storage {
     match /b/{bucket}/o {
       match /{all=**} {
         allow read: if true;
         allow write: if request.auth != null
           && request.auth.token.email in ["okunolaridwan284@gmail.com"];
       }
     }
   }
------------------------------------------------------------ */
