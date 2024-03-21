import { createFileRoute } from "@tanstack/react-router";
import axios from "axios";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/profile")({
  component: ProfilePage,
});

// interface User {
//   id: string;
//   passwordEnabled: boolean;
//   totpEnabled: boolean;
//   backupCodeEnabled: boolean;
//   twoFactorEnabled: boolean;
//   banned: boolean;
//   createdAt: number;
//   updatedAt: number;
//   imageUrl: string;
//   hasImage: boolean;
//   primaryEmailAddressId: string;
//   primaryPhoneNumberId: string | null;
//   primaryWeb3WalletId: string | null;
//   lastSignInAt: number;
//   externalId: string | null;
//   username: string;
//   firstName: string;
//   lastName: string;
//   publicMetadata: Record<string, unknown>;
//   privateMetadata: Record<string, unknown>;
//   unsafeMetadata: Record<string, unknown>;
//   emailAddresses: EmailAddress[];
//   phoneNumbers: string[];
//   web3Wallets: string[];
//   externalAccounts: ExternalAccount[];
//   createOrganizationEnabled: boolean;
// }

// interface EmailAddress {
//   id: string;
//   emailAddress: string;
//   verification: {
//     status: string;
//     strategy: string;
//     externalVerificationRedirectURL: string | null;
//     attempts: number | null;
//     expireAt: number | null;
//     nonce: string | null;
//   };
//   linkedTo: {
//     id: string;
//     type: string;
//   }[];
// }

// interface ExternalAccount {
//   id: string;
//   approvedScopes: string;
//   emailAddress: string;
//   username: string | null;
//   publicMetadata: Record<string, unknown>;
//   label: string | null;
//   verification: {
//     status: string;
//     strategy: string;
//     externalVerificationRedirectURL: string | null;
//     attempts: number | null;
//     expireAt: number | null;
//     nonce: string | null;
//   };
// }

function ProfilePage() {
  // const initialUserState: User = {
  //   id: "",
  //   passwordEnabled: false,
  //   totpEnabled: false,
  //   backupCodeEnabled: false,
  //   twoFactorEnabled: false,
  //   banned: false,
  //   createdAt: 0,
  //   updatedAt: 0,
  //   imageUrl: "",
  //   hasImage: false,
  //   primaryEmailAddressId: "",
  //   primaryPhoneNumberId: null,
  //   primaryWeb3WalletId: null,
  //   lastSignInAt: 0,
  //   externalId: null,
  //   username: "chian",
  //   firstName: "",
  //   lastName: "",
  //   publicMetadata: {},
  //   privateMetadata: {},
  //   unsafeMetadata: {},
  //   emailAddresses: [],
  //   phoneNumbers: [],
  //   web3Wallets: [],
  //   externalAccounts: [],
  //   createOrganizationEnabled: false,
  // };

  const [userData, setUserData] = useState("");

  useEffect(() => {
    // const userId = "user_2drIawNzL3DqdFcFBgot0h2D000";

    const fetchUser = async () => {
      const response = await axios.get(`http://localhost:5003/test`);
      const user = await response.data;

      setUserData(user);
    };

    fetchUser();
  }, []);

  return <div>Hello /profile! {userData}</div>;
}
