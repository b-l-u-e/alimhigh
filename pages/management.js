import Header from "../components/Header";
import Staff from "../components/Staff";

function management() {
  return (
    <section className="bg-gray-100 text-gray-900 absolute min-h-screen min-w-max">
      <Header />
      <div className="m-10 p-4 flex items-center flex-col max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold border-b-4 border-green-700 ">
          SCHOOL MANAGEMENT & ADMINISTRATIVE STAFF
        </h1>
        <p className="pt-5 tracking-wider text-center">
          The school is managed by a Board of Directors chaired by Mr. Ahmed
          Yussuf, a highly qualified and experienced educationist who is the
          founding director and is the manager of Wamy High School. He has vast
          experience in the education sector having served as Chief Inspector of
          Schools in the Ministry of Education and as the Secretary / CEO of
          Kenya National Examinations Council. The School Staff consists of a
          team of qualified, experienced and committed teachers who guide bright
          students in acquiring abilities and skills in a wide range of subjetcs
          and co-curricular actvities.
        </p>
      </div>

      <div className="boxArea">
        <img
          className="rounded-md h-50 w-60 object-contain"
          src="/images/director.jpg"
        />
        <Staff title="Director" name="Dr. Ahmed Yussuf (S.S, M.B.S)" />
      </div>

      <div className=" m-10  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4   ">
        <div className="boxArea ">
          <img className="imgstyle" src="/images/lazaro.jpg" />
          <Staff
            title="Acting Deputy Principal & Head of Academics"
            name="Lazaro Etyang"
          />
        </div>

        <div className=" boxArea">
          <img className="imgstyle" src="/images/peter.jpg" />
          <Staff
            title="H.O.D Boarding (Physics / Chemistry)"
            name="Mr. Peter Maina"
          />
        </div>

        <div className=" boxArea">
          <img className="imgstyle" src="/images/yusra.jpg" />
          <Staff
            title="H.O.D Guidance & Counseling (English Literature)"
            name="Ms. Yusra Ali"
          />
        </div>

        <div className=" boxArea">
          <img className="imgstyle" src="/images/loreen.jpg" />
          <Staff title="Business Studies / History" name="Loreen Ogoye" />
        </div>

        <div className=" boxArea">
          <img className="imgstyle" src="/images/abraham.jpg" />
          <Staff
            title="H.O.D - Humanities (Kiswahili / History)"
            name="Abraham Kipkurui"
          />
        </div>

        <div className=" boxArea">
          <img className="imgstyle" src="/images/catherine.jpg" />
          <Staff title="Biology / Chemistry" name="Ms. Catherine N Ndunge" />
        </div>

        <div className=" boxArea">
          <img className="imgstyle" src="/images/wycliffe.jpg" />
          <Staff
            title="H.O.D - Games & Sports (Maths / Geography)"
            name="Wycliffe Matamba"
          />
        </div>

        <div className="boxArea">
          <img className="imgstyle" src="/images/caleb.jpg" />
          <Staff title="History / Kiswahili" name="Caleb Juma" />
        </div>

        <div className="boxArea">
          <img className="imgstyle" src="/images/miriam.jpg" />
          <Staff
            title="H.O.D-Technicals & Applied Science"
            name="Miriam Mwikali"
          />
        </div>

        <div className=" boxArea">
          <img className="imgstyle" src="/images/ismail.jpg" />
          <Staff title="English / I.R.E" name="Ismail Hassan" />
        </div>

        <div className=" boxArea">
          <img className="imgstyle" src="/images/mariam.jpg" />
          <Staff title="English/ I.R.E" name="Mariam Khalid" />
        </div>

        <div className="boxArea">
          <img className="imgstyle" src="/images/collins.jpg" />
          <Staff title="Librarian" name="Collins Kariri" />
        </div>
      </div>

      <div className="flex items-center flex-col mb-12">
        <h1 className="text-2xl text-gray-900 border-b-4 border-green-500">
          Vacancies
        </h1>
        <p className="text-xl font-serif mb-1">
          Applications should be sent to:
        </p>
        <p className="text-gray-700">The Principal</p>
        <p className="text-md font-medium">
          Alim High School P.O.Box 234, Machakos
        </p>
        <p className="font-medium">Email: alimhigh@yahoo.com</p>
      </div>
    </section>
  );
}

export default management;
