import { memo } from "react";

import { BaseUserData } from "api/types";

import { RowHolder } from "./style";

function UserRow({ userData }: { userData: BaseUserData }) {
  return (
    <RowHolder>
      <img src={userData.picture} alt="" />

      <span>
        {userData.firstName} {userData.lastName}
      </span>
    </RowHolder>
  );
}

/* Each row contains static data so no need to re-render in any cases */
function areEqual(): boolean {
  return true;
}

export default memo(UserRow, areEqual);
