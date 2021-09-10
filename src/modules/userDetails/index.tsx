import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";

import { fetchUserDetails } from "api";

import { Container, UserDataWrapper, UserInfo } from "./style";

function UserDetails() {
  const { userId } = useParams<{ userId: string }>();

  const { data, isFetching } = useQuery(`user-details-${userId}`, async ({ pageParam = 0 }) => {
    const res = await fetchUserDetails(userId);
    return res.data;
  });

  return (
    <Container>
      <nav>
        <Link to="/">Back to users list</Link>
      </nav>

      {isFetching && <span>Is fetching...</span>}

      {data && (
        <UserDataWrapper>
          <img src={data.picture} alt="User avatar" />

          <UserInfo>
            <li>
              {data.firstName} {data.lastName}
            </li>
            <li>{data.gender}</li>
            <li>{data.email}</li>
            <li>{data.phone}</li>
          </UserInfo>
        </UserDataWrapper>
      )}
    </Container>
  );
}

export default UserDetails;
