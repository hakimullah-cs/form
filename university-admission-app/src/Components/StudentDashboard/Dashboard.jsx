
const Dashboard = () => {
    return (
      <section className="p-5 ">
        <div className="flex md:justify-between justify-center lg:flex-nowrap flex-wrap mb-5">
          <div className="w-[330px] px-3 py-3 rounded-md shadow-md text-center border-t-4 border-[#1B4E69] lg:mb-0 mb-4">
            <h3 className="text-xl font-bold text-[#1B4E69] mb-3">Personal Info</h3>
            <p className="text-[16px]">Dear <span className="font-bold text-[#1B4E69]">Junaid Khan</span> You have been saved your personal information successfully. Remember that you must enter you personal information accurately. You can edit your infromation anytime before final submisstion, click on personal information tab in the menu</p>
          </div>
          <div className="w-[330px] px-3 py-3 rounded-md shadow-md text-center border-t-4 border-[#1B4E69] lg:mb-0 mb-4">
            <h3 className="text-xl font-bold text-[#1B4E69] mb-3">Documents</h3>
            <p className="text-[16px]">Dear <span className="font-bold">Junaid Khan</span>, You have been uploaded your  documents successfully. Remember that you must upload all the required documents as per program requirement, otherwise your application will not be consider.</p>
          </div>
          <div className="w-[330px] px-3 py-3 rounded-md shadow-md text-center border-t-4 border-[#1B4E69] lg:mb-0 mb-4">
            <h3 className="text-xl font-bold text-[#1B4E69] mb-3">Incomplete Info</h3>
            <p className="text-[16px] text-red-600">Your application is not yet completed,. Kindly review your Personal Information, Qualification, Program Selection, and Required Documents as per program eligibility criteria. As soon as you complete all required information the application submission button will appear for final submission. Thanks</p>
          </div>
         
          
        </div>
        <div className=" px-3 py-1 rounded-md shadow-md border-t-4 border-[#1B4E69] mb-2">
          <h3 className="text-center text-xl font-bold text-[#1B4E69]">Admission Requirements</h3>
          <div>
            <p className="mb-2">1.Attested Copies of all documents should be attached with the application form.</p>
            <p className="mb-2">2.DMC/Transcript of SSC and HSSC or equivalent Examination.</p>
            <p className="mb-2">3.Original/Provisional certificate of SSC,HSSC or equivalent examination.</p>
            <p className="mb-2">4.Domicile Certficate.</p>
            <p className="mb-2">5.Photocopy of original CNIC</p>
            <p className="mb-2">6.3 Passfort Size Pictures with white Background.</p>
          </div>
        </div>
      </section>
    )
  }
  
  export default Dashboard