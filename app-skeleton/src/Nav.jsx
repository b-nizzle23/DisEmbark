import { useNavigate } from 'react-router-dom';


export default function NavBar () {
  const navigate = useNavigate();

  async function handleAccount() {
    return navigate("/userinfo");
  }

  async function handleMaps() {
    return navigate("/mappage");
  }

  async function handleAdd() {
    return navigate("/addpin");
  }
  

  return (
    <>
      <div className="Navigation">
        <button onClick={handleAccount}>Account</button>
        <button onClick={handleMaps}>Maps</button>
        {/* <button onClick={handleAdd}>Add Pin</button> */}
      </div>
    </>
  )
}