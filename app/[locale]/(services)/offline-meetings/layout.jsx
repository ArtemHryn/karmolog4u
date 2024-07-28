import Navigation from "@components/Services/Offline-meetings/Navigation/Navigation";

const OfflineMeetingsLayout = ({ children }) => {
  return (
    <main>
      <Navigation />
      {children}
    </main>
  );
};

export default OfflineMeetingsLayout;
