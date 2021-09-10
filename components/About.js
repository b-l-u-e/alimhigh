function About() {
  return (
    <div className="mt-8 tracking-wider">
      <div className="flex flex-col items-center p-4">
        <h1 className="text-2xl border-b-4 border-green-400 mb-3">About Us</h1>
        <p className="text-lg">
          The School is a boys boarding school offering the 8-4-4 curriculum
        </p>
      </div>

      <div className="flex items-center flex-col mt-4">
        <div className="mb-2">
          <h1 className="text-md font-semibold">WHERE WE ARE LOCATED</h1>
        </div>

        <div class="mapouter">
          <div class="gmap_canvas">
            <iframe
              width="645"
              height="344"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=alim%20high%20school&t=&z=11&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
            <a href="https://www.whatismyip-address.com/divi-discount/"></a>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-2 pb-5">
        <h1 className="text-lg font-semibold text-gray-900">OUR VISION</h1>
        <p className="text-gray-700">
          To be among the top secondary schools in the country
        </p>
      </div>
      <div className="pt-2 pb-5">
        <h1 className="text-lg font-semibold text-gray-900 ">OUR MISSION</h1>
        <p className="text-gray-700">
          To produce students who qualify to join universities and other
          tertiary institutions, who are spiritually upright and practicing
          believers and who include the orphaned and those from poor households.
        </p>
      </div>

      <div className="pt-2 pb-5">
        <h1 className="font-semibold text-lg text-gray-900">OBJECTIVES</h1>
        <p className="text-gray-700">
          The school aims at producing students who will become teachers,
          doctors, engineers, lawyers and other professionals who will be
          leaders in the community. Alleviation of poverty through education.
        </p>
      </div>

      <div className="pb-5">
        <h1 className="font-semibold text-lg text-red-500">ADMISSION POLICY</h1>
        <p className="pb-2 text-gray-700">
          Alim High School admits students of all races and religions.To ensure
          a high stndard, we admit students as follows:
        </p>
        <p className="font-bold text-md">Form I: </p>
        <p className="text-gray-700">
          Students must have scored 300 marks or above in KCPE and pass an
          admission test
        </p>
        <p className="font-bold text-md">Form II:</p>
        <p className="text-gray-700">
          Students must have scored 300 marks or above. In addition they must be
          among top students in their former schools and also pass our written
          interview.
        </p>
        <p className="text-gray-700">
          <span className="font-bold text-red-500 ">NB:</span> We DO NOT admit
          students into Forms III and IV classes because we believe we must
          nurture our students from an early stage.
        </p>
      </div>

      <div className="pt-2 pb-5 flex flex-col items-center">
        <h1 className="font-semibold text-lg text-gray-900">SCHOOL MOTTO</h1>
        <p className="text-green-700 italic">
          "Providing Opportunity to Excel"
        </p>
      </div>
    </div>
  );
}

export default About;
