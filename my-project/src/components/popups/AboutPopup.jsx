import { useContext } from "react";
import { AppContext } from "../../context.jsx";

const AboutPopup = (props) => {

  const { setshowCard } = useContext(AppContext);
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center backdrop-filter backdrop-blur-lg">
      <div className="max-h-[75vh] max-w-[45%] min-w-[500px] border-2 bg-white shadow-xl rounded-md border-gray-200 p-4 relative">
        <div className="mb-4 flex justify-between">
          <span className="text-3xl font-bold">About Us</span>
          <button
            type="button"
            className="text-red-600 text-3xl font-bold hover:text-red-700 focus:outline-none"
            onClick={() => {
              setshowCard(false);
            }}
          >
            &times;
          </button>
        </div>
        <table className="w-full">
          <tbody>
            <tr key={1}>
              <td className="text-lg font-semibold">Members:</td>
              <td className="text-lg">Muhammad Tarar & Yaseen Taha</td>
            </tr>

            <tr>
              <td colSpan="2" className="text-center">
                <div className="min-h-60 bg-gray-200 rounded-lg mt-8 flex flex-col justify-center items-center px-7">
                  <span className="text-lg font-semibold mb-4">We used React and Tailwind CSS to create this website.</span>
                  <span className="text-lg font-semibold">Thank you for checking it out.</span>
                  <span className="text-lg font-semibold">Thank you for an amazing class Randy.</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AboutPopup;
