import MainNavigation from "./MainNavigation";

function Layout(props) {
  return (
    <div className="bg-gradient-to-bl from-indigo-200 via-red-200 to-yellow-100 ">
      <MainNavigation />
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
