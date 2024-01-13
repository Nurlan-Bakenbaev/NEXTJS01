import React from "react";
import { UserProfileProps } from "@/helpers/types";

const UserProfile: React.FC<UserProfileProps> = ({ params }) => {
  return <div>UserId{params.id}</div>;
};

export default UserProfile;
