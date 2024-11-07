const User = ({ user }) => {
    if (!user) return null; // Ensure user data is not null before rendering
  
    return (
      <>
      <div className=" p-10 bg-card border-black border-2 rounded-xl">
        <img src={user.avatar_url} alt={`${user.login}'s avatar`} className="border-solid border-black border-2 w-[200px] h-[200px] rounded-3xl" />
        <h1 className="text-white  text-[20px] center text-center pt-5 font-bold">Username: {user.login}</h1>

        <div className="text-center text-[#e8d6fc] pt-3">

        <a className="" href={user.html_url} target="_blank" rel="noopener noreferrer">
          View GitHub Profile
        </a>
        </div>

      </div>
        
      </>
    );
  };
  
  export default User;
  