export default function NavBar() {
  return (
    <>
      <div className="mx-auto w-full  bg-white px-2  lg:px-5">
        <div className="flex h-[4.4rem] items-center justify-between">
          {/* Left Side of Navbar */}
          <div className="flex flex-shrink-0 items-center gap-5 lg:gap-10">
            {/* Main Logo */}
            <img
              className="hidden h-6 w-auto  lg:block"
              src="./amrutam-text-logo.png"
              alt="Amrutam Logo"
            />
            {/* Toggle Button for Sidebar */}
            <img
              className="h-6 w-5"
              src="./bar-icon.svg"
              alt="Toggle Sidebar"
            />
            {/* Search Bar */}
            <div className="bg-darkOliveGreen-100 hidden h-11  items-center justify-start gap-2 rounded-xl px-3 md:flex">
              <img src="./search-icon.svg" alt="Search Icon" />
              <input
                className=" placeholder-darkOliveGreen-200    text-darkOliveGreen-dark  w-52 bg-transparent  px-2 py-1 font-poppins text-[13px] font-medium leading-5 focus:border-none focus:outline-none  "
                placeholder="Search Here"
              />
            </div>
          </div>
          {/* Right Side of Navbar */}
          <div className="flex h-[2.5rem] flex-shrink-0 items-center gap-3 lg:gap-6">
            {/* Inbox */}
            <img src="./inbox-icon.svg" className="h-[1.7rem]" alt="Inbox" />
            {/* Notification */}
            <img
              src="./notification-icon.svg"
              className="h-[1.7rem]"
              alt="Notification"
            />
            {/* Profile */}
            <div className="flex items-center justify-between gap-2">
              <div className="flex flex-col justify-between">
                <h2 className="text-darkOliveGreen-dark text-right font-poppins text-[1rem] font-semibold leading-[19.2px]">
                  Dr. Liam Michael
                </h2>
                <span className="text-darkOliveGreen-200  text-right font-poppins text-xs font-medium leading-[20px]">
                  Doctor
                </span>
              </div>
              <img
                src="./profile-icon.png"
                className="h-[2.5rem] w-[2.5rem] rounded-[14px] bg-cover"
                alt="Profile"
              />
            </div>
            {/* Settings */}
            <img
              src="./settings-icon.svg"
              className="h-[1.7rem]"
              alt="Settings"
            />
          </div>
        </div>
      </div>
    </>
  );
}