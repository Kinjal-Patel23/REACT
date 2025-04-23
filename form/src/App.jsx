import Card from "./Card";

function App() {

  const handleSubmitBtn = (e) => {
    e.preventDefault();

    let nameInput = document.getElementById("name").value;
    let emailInput = document.getElementById("email").value;
    let phoneInput = document.getElementById("phone").value;
    let gender = document.getElementById("gender").value;
    let designation = document.getElementById("role").value;

    const userData = [{
      name : nameInput,
      email : emailInput,
      phone : phoneInput,
      gender : gender,
      role : designation
    }];

    localStorage.setItem("user", JSON.stringify(userData));

    window.location.reload();
  }

  return (
    <>
      <form className="user-form">
        <h2>User Information Form</h2>

        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" />

        <label htmlFor="phone">Phone Number</label>
        <input type="tel" id="phone" />

        <label htmlFor="gender">Gender</label>
        <select id="gender">
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>

        <label htmlFor="role">Designation / Role</label>
        <input type="text" id="role" />

        <input
          type="submit"
          id="submitBtn"
          value="Submit"
          onClick={handleSubmitBtn}
        />
      </form>

      <Card userInfo={JSON.parse(localStorage.getItem("user"))?.[0]} />
    </>
  )
}

export default App
