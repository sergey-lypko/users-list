import React from "react";
import { Link } from "react-router-dom";
import { useInfiniteQuery } from "react-query";

import { BaseUserData } from "api/types";

import { fetchUsers } from "api";
import { useIntersectionObserver } from "hooks";

import { UserRow } from "./userRow";

import { Container } from "./style";

function UsersList() {
  const { data, isFetching, fetchNextPage } = useInfiniteQuery(
    "users",
    async ({ pageParam = 0 }) => {
      const res = await fetchUsers(pageParam);
      return res.data;
    },
    {
      getNextPageParam: (lastPage) => {
        return lastPage.page + 1;
      },
    },
  );

  const anchorRef = React.useRef<HTMLDivElement>(null);

  useIntersectionObserver({
    target: anchorRef,
    onIntersect: fetchNextPage,
    enabled: !isFetching,
  });

  return (
    <Container data-cy="users-list-container">
      {data?.pages.map((page) => {
        return (
          <React.Fragment key={page.page}>
            {page.data.map((userData: BaseUserData) => (
              <Link key={userData.id} to={`/users/${userData.id}`}>
                <UserRow userData={userData} />
              </Link>
            ))}
          </React.Fragment>
        );
      })}

      {isFetching && <span>Loading data...</span>}

      <div ref={anchorRef} />
    </Container>
  );
}

export default UsersList;
