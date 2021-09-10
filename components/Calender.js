function CalenderSection() {
  return (
    <div className="flex items-center flex-col flex-grow mx-10 mt-2">
      <div className="mt-4">
        <h1 className="font-semibold text-xl border-b-4 border-green-300 text-gray-800">
          CALENDER OF EVENTS
        </h1>
      </div>
      <div className="mt-4 mb-5 flex items-center flex-col">
        <h1 className="border rounded-md bg-gray-200 px-7 py-2 mb-4 text-gray-600 cursor-pointer hover:bg-white transition transform duration-200">
          SECOND TERM
        </h1>
        <div className="flex items-center">
          <h2 className="pr-5 text-green-500">Opening Date</h2>
          <p>4th January 2021</p>
        </div>
        <div className="flex items-center">
          <h2 className="pr-5 text-red-400">Closing Date</h2>
          <p>19th March 2021</p>
        </div>
      </div>

      <div className="mt-4 mb-5 flex items-center flex-col">
        <h1 className="border rounded-md bg-gray-200 px-8 py-2 mb-4 text-gray-600 cursor-pointer hover:bg-white transition transform duration-200">
          THIRD TERM
        </h1>
        <div className="flex items-center">
          <h2 className="pr-5 text-green-500">Opening Date</h2>
          <p>10th May 2021</p>
        </div>
        <div className="flex items-center">
          <h2 className="pr-5 text-red-400">Closing Date</h2>
          <p>16th July 2021</p>
        </div>
      </div>
    </div>
  );
}

export default CalenderSection;
