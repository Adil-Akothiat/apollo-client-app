import { useQuery, gql } from '@apollo/client';
const GET_USERS = gql `
  query GetUsers {
    users {
      id
      login
      avatar_url
      url
      repos_url
    }
  }
`;
const style = {
    color: "#232323",
    fontFamily: "monospace",
    fontSize: "18px",
    listStyleType:"square",
    margin: "20px 0"
}
const anchorStyle = {
    textDecoration: "none",
    color: "lightblue"
}
export default function GetUsers () {
  const {loading, error, data} = useQuery(GET_USERS);
  if(loading) return <p>Loading...</p>;
  if(error) return <p>Error :)</p>;
  return data.users.map(({id, login, avatar_url, url, repos_url}, i)=> (
    <ul key={id} style={style}>
      <li>ID___: {id}</li>
      <li>LOGIN__: {login}</li>
      <li>
        AVATAR_URL__:<a href={avatar_url}  style={anchorStyle} target={"_blank"} rel="noreferrer">URL</a>
      </li>
      <li>
        URL__:<a href={url} style={anchorStyle} target={"_blank"} rel="noreferrer">URL</a>
      </li>
      <li>
        REPOSITORY__:<a href={repos_url} style={anchorStyle} target={"_blank"} rel="noreferrer">URL</a>
      </li>
    </ul>
  ))
}