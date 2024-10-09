import './App.css';
import ReusableForm from './components/ReusableForm/ReusableForm';
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import StateFulForm from './components/StateFulForm/StateFulForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'

function App() {

  // For Reusable form
  const handleSignUpSubmit = (data) => {
    // e.preventDefault();
    console.log('Signing up', data);
  }

  const handleUpdateProfile = (data) => {
    // e.preventDefault();
    console.log('Updating profile', data);
  }
  
  return (
    <>
      
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm>     */}
      {/* <StateFulForm></StateFulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReusableForm 
      formTitle="Sign Up" 
      handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign Up</h2>
          <p>Please sign up right now</p>
        </div>
      </ReusableForm>
      <ReusableForm 
      formTitle={'Profile Update'} 
      submitBtnText={'Update'}
      handleSubmit={handleUpdateProfile}
      >
        <div>
          <h2>Update Profile</h2>
          <p>Always keep your profile updated</p>
        </div>

      </ReusableForm>
    </>
  )
}

export default App
